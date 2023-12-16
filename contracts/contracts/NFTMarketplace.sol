// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFTCarplace is ERC721URIStorage {
  
    uint256 private _tokenIds;
    uint256 private _itemsSold;

    uint256 listingPrice = 0.025 ether;
    address payable owner;

    mapping(uint256 => CarItem) private idToCarItem;

    struct CarItem {
      uint256 tokenId;
      address payable seller;
      address payable owner;
      uint256 price;
      bool sold;
    }

    event CarItemCreated (
      uint256 indexed tokenId,
      address seller,
      address owner,
      uint256 price,
      bool sold
    );

    constructor() ERC721("Metaverse Tokens", "METT") {
      owner = payable(msg.sender);
    }

    /* Updates the listing price of the contract */
    function updateListingPrice(uint _listingPrice) public payable {
      require(owner == msg.sender, "Only Carplace owner can update listing price.");
      listingPrice = _listingPrice;
    }

    /* Returns the listing price of the contract */
    function getListingPrice() public view returns (uint256) {
      return listingPrice;
    }

    /* Mints a token and lists it in the Carplace */
    function createToken(string memory tokenURI, uint256 price) public payable returns (uint) {
      _tokenIds += 1;
      uint256 newTokenId = _tokenIds;

      _mint(msg.sender, newTokenId);
      _setTokenURI(newTokenId, tokenURI);
      createCarItem(newTokenId, price);
      return newTokenId;
    }

    function createCarItem(
      uint256 tokenId,
      uint256 price
    ) private {
      require(price > 0, "Price must be at least 1 wei");
      require(msg.value == listingPrice, "Price must be equal to listing price");

      idToCarItem[tokenId] =  CarItem(
        tokenId,
        payable(msg.sender),
        payable(address(this)),
        price,
        false
      );

      _transfer(msg.sender, address(this), tokenId);
      emit CarItemCreated(
        tokenId,
        msg.sender,
        address(this),
        price,
        false
      );
    }

    /* allows someone to resell a token they have purchased */
    function resellToken(uint256 tokenId, uint256 price) public payable {
      require(idToCarItem[tokenId].owner == msg.sender, "Only item owner can perform this operation");
      require(msg.value == listingPrice, "Price must be equal to listing price");
      idToCarItem[tokenId].sold = false;
      idToCarItem[tokenId].price = price;
      idToCarItem[tokenId].seller = payable(msg.sender);
      idToCarItem[tokenId].owner = payable(address(this));
      _itemsSold -= 1;

      _transfer(msg.sender, address(this), tokenId);
    }

    /* Creates the sale of a Carplace item */
    /* Transfers ownership of the item, as well as funds between parties */
    function createCarSale(
      uint256 tokenId
      ) public payable {
      uint price = idToCarItem[tokenId].price;
      require(msg.value == price, "Please submit the asking price in order to complete the purchase");
      idToCarItem[tokenId].owner = payable(msg.sender);
      idToCarItem[tokenId].sold = true;
      idToCarItem[tokenId].seller = payable(address(0));
      _itemsSold += 1;
      _transfer(address(this), msg.sender, tokenId);
      payable(owner).transfer(listingPrice);
      payable(idToCarItem[tokenId].seller).transfer(msg.value);
    }

    /* Returns all unsold Car items */
    function fetchCarItems() public view returns (CarItem[] memory) {
      uint itemCount = _tokenIds;
      uint unsoldItemCount = _tokenIds - _itemsSold;
      uint currentIndex = 0;

      CarItem[] memory items = new CarItem[](unsoldItemCount);
      for (uint i = 0; i < itemCount; i++) {
        if (idToCarItem[i + 1].owner == address(this)) {
          uint currentId = i + 1;
          CarItem storage currentItem = idToCarItem[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return items;
    }

    /* Returns only items that a user has purchased */
    function fetchMyNFTs() public view returns (CarItem[] memory) {
      uint totalItemCount = _tokenIds;
      uint itemCount = 0;
      uint currentIndex = 0;

      for (uint i = 0; i < totalItemCount; i++) {
        if (idToCarItem[i + 1].owner == msg.sender) {
          itemCount += 1;
        }
      }

      CarItem[] memory items = new CarItem[](itemCount);
      for (uint i = 0; i < totalItemCount; i++) {
        if (idToCarItem[i + 1].owner == msg.sender) {
          uint currentId = i + 1;
          CarItem storage currentItem = idToCarItem[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return items;
    }

    /* Returns only items a user has listed */
    function fetchItemsListed() public view returns (CarItem[] memory) {
      uint totalItemCount = _tokenIds;
      uint itemCount = 0;
      uint currentIndex = 0;

      for (uint i = 0; i < totalItemCount; i++) {
        if (idToCarItem[i + 1].seller == msg.sender) {
          itemCount += 1;
        }
      }

      CarItem[] memory items = new CarItem[](itemCount);
      for (uint i = 0; i < totalItemCount; i++) {
        if (idToCarItem[i + 1].seller == msg.sender) {
          uint currentId = i + 1;
          CarItem storage currentItem = idToCarItem[currentId];
          items[currentIndex] = currentItem;
          currentIndex += 1;
        }
      }
      return items;
    }
}