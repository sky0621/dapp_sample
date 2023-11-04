import {ethers} from "hardhat";

const ownerAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

const main = async () => {
    const MemberNFT = await ethers.getContractFactory("MemberNFT");
    const memberNFT = await MemberNFT.deploy(ownerAddress);
    await memberNFT.deployed();

    console.info(`Contract deployed to: ${memberNFT.address}`)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
