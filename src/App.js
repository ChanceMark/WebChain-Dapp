import React, { useState } from 'react';
import WalletConnector from './components/WalletConnector';
import TokenBalance from './components/TokenBalance';
import tokenABI from './contracts/MyToken.json';

const App = () => {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const tokenAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

    return (
        <div>
            <h1>WebChain Dapp</h1>
            <WalletConnector setWeb3={setWeb3} setAccount={setAccount} />
            {account && <p>Connected Account: {account}</p>}
            {web3 && account && (
                <TokenBalance web3={web3} account={account} tokenAddress={tokenAddress} tokenABI={tokenABI} />
            )}
        </div>
    );
};

export default App;
