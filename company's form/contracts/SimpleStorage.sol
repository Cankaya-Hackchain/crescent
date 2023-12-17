//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
  uint storedData;

  struct satis {
    uint256 tarih;
    uint256 fiyat;
  }

  mapping (uint256 => satis) public mockDb;

  function set(uint256 _id, uint256 _tarih, uint256 _fiyat) public {
    mockDb[_id] = satis(_tarih, _fiyat);
  }

  function get(uint256 _id) public view  returns (satis memory) {
    return mockDb[_id];
  }
}