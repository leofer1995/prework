require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/o8ycONUnNJ6hFQaIYy9owT-Jp10Mcvrt',//alchemy endpoint
      accounts: ['f409cf3d7fcbd73241cef285646be933f3885b99792e07c24787031e2a5958af']
    }
  }

};
