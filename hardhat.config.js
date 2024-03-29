require("@nomicfoundation/hardhat-toolbox");
require("hardhat-contract-sizer")

require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  paths: {
    artifacts: "./src/artifacts"
  },
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC,
      accounts: [process.env.GOERLI_PRIVATE_KEY]
    },
    mumbai: {
      url: process.env.MUMBAI_RPC,
      accounts: [process.env.MUMBAI_PRIVATE_KEY],      
    },
    polygon: {
      url: process.env.POLYGON_RPC,
      accounts: [process.env.POLYGON_PRIVATE_KEY],      
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
}
