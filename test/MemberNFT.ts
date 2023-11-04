import {expect} from "chai";
import {ethers} from "hardhat";

describe("MemberNFTコントラクト", async function() {
    let MemberNFT;
    let memberNFT: any;
    const name = "MemberNFT";
    const symbol = "MEM";
    const ownerAddress = "0xfc8338240C87968e63C6C2C3453C540accaAF972"

    beforeEach(async function() {
        MemberNFT = await ethers.getContractFactory("MemberNFT", );
        memberNFT = await MemberNFT.deploy(ownerAddress);
        await memberNFT.deployed();
    })

    it("トークンの名前とシンボルがセットされるべき", async function() {
        expect(await memberNFT.name()).to.equal(name);
        expect(await memberNFT.symbol()).to.equal(symbol);
    })
    it("コンストラクタに設定したアドレスがownerに設定されるべき", async function() {
        expect(await memberNFT.owner()).to.equal(ownerAddress);
    })
})