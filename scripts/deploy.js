const hre = require("hardhat");

async function main() {
    const EssayNFT = await hre.ethers.getContractFactory("EssayNFT");
    const essayNFT = await EssayNFT.deploy();
    await essayNFT.deployed();

    console.log("EssayNFT deployed to:", essayNFT.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
