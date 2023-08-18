require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()


// task("accounts", "Prints the list of accounts", async (args, { ethers }) => {
//   const [operator] = await ethers.getSigners();

//   console.log(`Operator address: ${operator.address}`);
// });

const config = {
  solidity: "0.8.17",
  defaultNetwork: "mainnet",
  networks: {

    mainnet: {
      url: "https://polygon-rpc.com/",
      chainId: 137,
      accounts: [process.env.METAMASK_PRIVATE_KEY],


    },
  },
};

module.exports = config;
