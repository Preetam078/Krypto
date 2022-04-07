import React, {useState, useEffect} from "react";

import { ethers } from "ethers";

import {contractABI, contractAddress} from "../utils/constants";

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionContract;
}


export const TransactionProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({

        addressTo:'', amount:'',keyword:'', message:''
    });

    const handleChange = (e,name) => {
        setFormData((prevState) => (
           { ...prevState, [name]:e.target.value}
        ))
    }

    const walletConnected = async() => {

        try{

            if(!ethereum) return alert("Please install metamask");
    
            const accounts = await ethereum.request({method: "eth_accounts"});
    
            if(accounts.length){
                setCurrentAccount(accounts[0]);
    
                //getAllTransaction();
            }
            else{
                console.log("No account found");
            }
    
            console.log(accounts);
        }
        catch(error){
            console.log(error);
            throw new Error("No ethereum Object")

        }

    }

    const connectWallet = async() => {

        try{
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            setCurrentAccount(accounts[0]);

        }catch(error){
            console.log(error);
            throw new Error("No ethereum Object")
        }
    }

    const sendTransaction = async() => {

        try {

            if(!ethereum) return alert("Please install metamask");

            //get the data from the form from welcome.jsx
            const {addressTo, amount,keyword,message} = formData;
            const transactionContract =  getEthereumContract();

            

            await ethereum.request({
                method:"eth_sendTransaction",
                params: [{
                    from:currentAccount,
                    to:addressTo,
                    gas: '0x5208',
                    value:amount,
                }]
            })
            
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum Object")
        }
    }

    useEffect(() => {
        walletConnected();
    },[])

    return (
        <TransactionContext.Provider value={{connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction}}>
          {children}
        </TransactionContext.Provider>
    )
}