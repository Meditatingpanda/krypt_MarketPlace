//https://eth-ropsten.alchemyapi.io/v2/HWfbZjwS4cUaFGRLrMxX4ZN3FOv6Lwsw

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/HWfbZjwS4cUaFGRLrMxX4ZN3FOv6Lwsw",
      accounts: [
        "e38bf1111d6a42b6ee3357b3adb359bf53f5444e301fb9e69457ee2789bfbc77",
      ],
    },
  },
};
