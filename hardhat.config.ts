import "@nomiclabs/hardhat-waffle";
import * as dotenv from "dotenv"

dotenv.config()

export default {
  solidity: "0.8.20",
  network: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
