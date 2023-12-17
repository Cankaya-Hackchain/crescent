import { formatEther, parseEther } from "viem";
import hre from "hardhat";

async function main() {
  const NFTCarplace = await hre.viem.deployContract("NFTCarplace", []);

  console.log("Market deployed to:", NFTCarplace.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
