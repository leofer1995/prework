const { ethers } = require('hardhat');

const main = async () => {
    const [deployer] = await ethers.getSigners();
    console.log({deployer});

    const Counter = await ethers.getContractFactory('Counter');// llamo el contrato counter
    const counter = await Counter.deploy(0);// los parametros del contructor

    console.log(counter.address);
}

main()
    .then(res => {
            process.exit(0);
        }
    ).catch(error => {
        console.log(error);
        process.exit(1);
    })