//https://eth-ropsten.alchemyapi.io/v2/15BewNcVZQUMfNgHFGwTx5bodlOPw1Do

require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity : "0.8.0",
  network : {
    ropsten : {
      url : "https://eth-ropsten.alchemyapi.io/v2/15BewNcVZQUMfNgHFGwTx5bodlOPw1Do",
      accounts:["9e36a6624ceb3c9721947b96af1fbcf8bf627465eada5f5a926aff382d81e742"]
    }
  }

}