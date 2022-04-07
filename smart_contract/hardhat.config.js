//https://eth-ropsten.alchemyapi.io/v2/rQvdlN9ZgXhENPk0YgiQEo_38-DY6a4u

require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity : "0.8.0",
  networks : {
    ropsten : {
      url : "https://eth-ropsten.alchemyapi.io/v2/rQvdlN9ZgXhENPk0YgiQEo_38-DY6a4u",
      accounts:["9e36a6624ceb3c9721947b96af1fbcf8bf627465eada5f5a926aff382d81e742"]
    }
  }

} 