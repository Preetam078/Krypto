// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.0;

contract Transaction {

    uint transactionCount;

    event Transfer( address from, address receiver, uint amount, string message, uint timestamp, string keyword);

    struct TransferStruct {

        address sender;
        address receiver;
        uint amount;
        string message;
        uint timestamp;
        string keyword;

    }

    TransferStruct[] transactions;

    function addToBlockchain (address payable receiver, uint amount, string memory message, string memory keyword) public {
      transactionCount += 1;

      transactions.push(TransferStruct(msg.sender, receiver, amount,message, block.timestamp, keyword));

      emit Transfer(msg.sender, receiver, amount,message, block.timestamp, keyword);
    }

     function getAllTransaction () public view returns(TransferStruct[] memory) {
      //return transaction;
       return transactions;

    }

     function getTransaction () public  view returns(uint){
      //return transactionCount;
       return transactionCount;
    }
}