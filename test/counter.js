const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter contract", () => {
    it('deberia incrementar el contador', async () => {
        const Counter = await ethers.getContractFactory('Counter');
        const counter = await Counter.deploy(0);// los parametros del contructor
        await counter.increment(); //llamo la funcion increment 
        const updatedCounter = counter.getCounter();

        expect(updatedCounter).to.equal(1);
    });

})