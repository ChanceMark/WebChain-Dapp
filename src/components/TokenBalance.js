import React, { useEffect, useState } from 'react';

const TokenBalance = ({ web3, account, tokenAddress, tokenABI }) => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const getBalance = async () => {
            if (web3 && account) {
                const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);
                const balance = await tokenContract.methods.balanceOf(account).call();
                setBalance(web3.utils.fromWei(balance, 'ether'));
            }
        };
        getBalance();
    }, [web3, account, tokenAddress, tokenABI]);

    return (
        <div>
            <h3>Token Balance: {balance}</h3>
        </div>
    );
};

export default TokenBalance;
