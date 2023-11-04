import {expect} from "chai";
import {ethers} from "hardhat";

describe("MemberNFTコントラクト", async function() {
    it("トークンの名前とシンボルがセットされるべき", async function() {
        const name = "MemberNFT";
        const symbol = "MEM";
        const ownerAddress = "0xfc8338240C87968e63C6C2C3453C540accaAF972"
        const MemberNFT = await ethers.getContractFactory("MemberNFT", );
        const memberNFT = await MemberNFT.deploy(ownerAddress);
        await memberNFT.deployed();

        expect(await memberNFT.name()).to.equal(name);
        expect(await memberNFT.symbol()).to.equal(symbol);
    })
    it("コンストラクタに設定したアドレスがownerに設定されるべき", async function() {
        const ownerAddress = "0xfc8338240C87968e63C6C2C3453C540accaAF972"
        const MemberNFT = await ethers.getContractFactory("MemberNFT", );
        const memberNFT = await MemberNFT.deploy(ownerAddress);
        await memberNFT.deployed();

        expect(await memberNFT.owner()).to.equal(ownerAddress);
    })
})