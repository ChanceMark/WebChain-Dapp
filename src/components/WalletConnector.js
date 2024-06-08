import React, { useState } from 'react';
import Web3 from 'web3';

const WalletConnector = () => {
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.enable();
                const accounts = await web3.eth.getAccounts();
                setAccount(accounts[0]);
            } catch (error) {
                console.error("User denied account access");
            }
        } else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    };

    return (
        <div>
            <button onClick={connectWallet}>Connect Wallet</button>
            {account && <p>Connected Account: {account}</p>}
        </div>
    );
};

export default WalletConnector;
