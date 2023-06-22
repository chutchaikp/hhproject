import { ethers } from "hardhat";

async function main() {
	// const currentTimestampInSeconds = Math.round(Date.now() / 1000);
	// const unlockTime = currentTimestampInSeconds + 60;
	// const lockedAmount = ethers.parseEther("0.001");

	const inittialSupply = ethers.parseEther('10000.0')
	// const ClassToken = await ethers.deployContract("ClassToken");
	const ClassToken = await ethers.getContractFactory("ClassToken");
	const token = await ClassToken.deploy(inittialSupply)
	await token.waitForDeployment();

	// console.log(
	// 	`Lock with ${ethers.formatEther(
	// 		lockedAmount
	// 	)}ETH and unlock timestamp ${unlockTime} deployed to ${Token.target}`
	// );

	console.log(`Deployed to ${token.target}`)
	console.log(`Deployed to ${await token.getAddress()}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
