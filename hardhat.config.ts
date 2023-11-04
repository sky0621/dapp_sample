import * as dotenv from "dotenv"
dotenv.config()

import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan"

export default {
  solidity: "0.8.20",
  defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};
