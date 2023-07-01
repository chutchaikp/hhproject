import { assert, expect } from "chai"

import {
	time,
	loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { ethers } from "hardhat";

async function deployFixture() {

	const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;

	const ONE_GWEI = 1000000000;

	const lockedAmount = ONE_GWEI;
	// const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

	// Contracts are deployed using the first signer/account by default
	const [owner, otherAccount] = await ethers.getSigners();

	const Greeter = await ethers.getContractFactory("Greeter");
	const greeter = await Greeter.deploy("hello", { value: lockedAmount });

	// const greeting = await lock.greeting;
	const _edit = await greeter.getMessage();
	const _owner = await greeter.owner();
	// console.log(_edit);
	console.log('--------------- get owner ------------')
	console.log(_owner);

	return { greeter, lockedAmount, owner, otherAccount };
}

describe('Greeter - Normal', () => {
	it('Check if message is "Hello"', async () => {
		const { greeter, } = await loadFixture(deployFixture);
		// expect(await greeter.getMessage()).to.equal("hello");		
		assert.equal(await greeter.getMessage(), "hello");
		await greeter.setMessage('world');
		assert.equal(await greeter.getMessage(), 'world');
	})

	// it('Check update', async () => {
	// 	const { greeter, } = await loadFixture(deployFixture);
	// 	await greeter.setMessage('world');
	// 	const result = await greeter.getMessage();
	// 	assert(result, 'world edit');
	// })
})