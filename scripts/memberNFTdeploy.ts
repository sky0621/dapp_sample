import {ethers} from "hardhat";
import * as dotenv from "dotenv"

dotenv.config()

const main = async () => {
    const ownerAddr = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
    const addr1 = "0x500393D4F2b53B5D3Ef695C381Afde2Fb18a7A45"
    const addr2 = "0xB5D8D3BF67A0991512b159864b3e84fbCE38BBa3"
    const addr3 = "0x5b4BC6A3Ab9dc6d4F192268EA4DA0257Fa0d8777"

    const tokenURIBase = "ipfs://bafybeigyod7ldrnytkzrw45gw2tjksdct6qaxnsc7jdihegpnk2kskpt7a/"
    const tokenURI1 = tokenURIBase+"metadata1.json"
    const tokenURI2 = tokenURIBase+"metadata2.json"
    const tokenURI3 = tokenURIBase+"metadata3.json"
    const tokenURI4 = tokenURIBase+"metadata4.json"
    const tokenURI5 = tokenURIBase+"metadata5.json"

    const MemberNFT = await ethers.getContractFactory("MemberNFT");
    const memberNFT = await MemberNFT.deploy(ownerAddr);
    await memberNFT.deployed();

    console.info(`Contract deployed to: https://mumbai.polygonscan.com/address/${memberNFT.address}`)

    let tx = await memberNFT.nftMint(addr1, tokenURI1);
    await tx.wait();
    console.info("NFT#1 minted.");

    tx = await memberNFT.nftMint(addr1, tokenURI2);
    await tx.wait();
    console.info("NFT#2 minted.");

    tx = await memberNFT.nftMint(addr2, tokenURI3);
    await tx.wait();
    console.info("NFT#3 minted.");

    tx = await memberNFT.nftMint(addr2, tokenURI4);
    await tx.wait();
    console.info("NFT#4 minted.");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
