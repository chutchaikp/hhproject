//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.18;

contract Greeter {
    string public message;
    address payable public owner;

    constructor(string memory _message) payable {
        message = _message;
        owner = payable(msg.sender);
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory _message) public {
        message = _message;
    }
}
