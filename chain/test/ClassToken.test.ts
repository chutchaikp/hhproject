import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

const ONE_GWEI = 1000000000;
const lockedAmount = ONE_GWEI;
// const initialSupply = ethers.utils.parseEther('10000.0')
const initialSupply = ethers.parseEther('10000.0')

async function deployFixture() {
	// Contracts are deployed using the first signer/account by default
	const [owner, otherAccount] = await ethers.getSigners();

	const ClassToken = await ethers.getContractFactory("ClassToken");
	const classToken = await ClassToken.deploy(initialSupply, { value: lockedAmount });

	// const _edit = await classToken.getMessage();
	// const _owner = await classToken.owner();	
	return { classToken, lockedAmount, owner, otherAccount };
}

// describe("ClassToken", function () {
// 	it("Should have the correct initial supply", async function () {
// 		const initialSupply = ethers.utils.parseEther('10000.0')
// 		const ClassToken = await ethers.getContractFactory("ClassToken");
// 		const token = await ClassToken.deploy(initialSupply, { value: lockedAmount });
// 		await token.deployed();
// 		expect(await token.totalSupply()).to.equal(initialSupply);
// 	});
// });

describe('ClassToken', function () {
	it('Should have the correct inittial supply', async function () {
		const { classToken: token, } = await loadFixture(deployFixture)
		expect(await token.totalSupply()).to.equal(initialSupply);
	})
})