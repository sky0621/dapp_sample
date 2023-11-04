import {expect} from "chai";
import {ethers} from "hardhat";

describe("MemberNFTコントラクト", async function() {
    let MemberNFT;
    let memberNFT: any;
    const name = "MemberNFT";
    const symbol = "MEM";
    const tokenUri1 = "hoge1"
    const tokenUri2 = "hoge2"
    let owner: any;
    let account1: any;

    beforeEach(async function() {
        [owner, account1] = await ethers.getSigners();
        MemberNFT = await ethers.getContractFactory("MemberNFT");
        memberNFT = await MemberNFT.deploy(owner.address);
        await memberNFT.deployed();
    })

    it("トークンの名前とシンボルがセットされるべき", async function() {
        expect(await memberNFT.name()).to.equal(name);
        expect(await memberNFT.symbol()).to.equal(symbol);
    })

    it("コンストラクタに設定したアドレスがownerに設定されるべき", async function() {
        expect(await memberNFT.owner()).to.equal(owner.address);
    })

    it("ownerはNFT作成できるべき", async function() {
        await memberNFT.nftMint(account1.address, tokenUri1);
        expect(await memberNFT.ownerOf(1)).to.equal(account1.address);
    })

    // it("NFT作成のたびにtokenIdがインクリメントされるべき", async function() {
    //     expect("").to.equal(0);
    // })
    //
    // it("owner以外はNFT作成に失敗すべき", async function() {
    //     expect("").to.equal(0);
    // })

})