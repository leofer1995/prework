// SPDX-License-Identifier: MIT

pragma solidity >=0.8.7;

contract Counter {

    uint counter;

    constructor(uint _counter) {
        counter = _counter;
    }

    function getCounter() public view returns(uint) {
        return counter;
    }

    function increment() public {
        counter++;
    }

    function setCounter(uint _setValue) public {
        counter = _setValue;
    }
    
}