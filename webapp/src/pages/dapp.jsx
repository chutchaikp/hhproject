// import styles from './Dapp.module.scss';
// const Dapp = () => {
// 	return (
// 		<div className={styles.dapp}>
// 			<h1> Dapp </h1>
// 		</div>
// 	)
// }
// export default Dapp;

import { useEffect, useState } from 'react';
import styles from './Dapp.module.scss';
import { ethers } from 'ethers';
const Dapp = () => {
  const [balance, setBalance] = useState(0);
  const [currentAccount, setCurrentAccount] = useState('');
  const [chainId, setChainId] = useState(undefined);
  const [chainName, setChainName] = useState('');

  useEffect(() => {
    async function initPage() {
      try {
        if (!currentAccount || !ethers.utils.isAddress(currentAccount)) return;

        if (!window.ethereum) return;

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const _balance = await provider.getBalance(currentAccount);
        const _ETHbalance = ethers.utils.formatEther(_balance);
        setBalance(_ETHbalance);

        const _network = await provider.getNetwork();
        setChainId(_network.chainId);
        setChainName(_network.name);
      } catch (error) {
        console.log(error.message);
      }
    }

    initPage();
  }, [currentAccount]);

  const onClickConnect = async () => {
    try {
      debugger;
      if (!window.ethereum) {
        console.log('Please install MetaMask');
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const { provider: ethereum } = provider;

      const _accounts = await provider.send('eth_requestAccounts', []);
      let _account = _accounts[0];

      // provider.on('accountsChanged', function (accounts) {
      //   debugger;
      //   _account = accounts[0];
      // });

      ethereum.on('accountsChanged', function (accs) {
        debugger;
      });

      debugger;
      const signer = provider.getSigner();

      const address = await signer.getAddress();

      console.log(address);

      // debugger;
      if (_accounts.length > 0) {
        setCurrentAccount(_accounts[0]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickDisconnect = () => {
    console.log('onClickDisConnect');
    setBalance(undefined);
    setCurrentAccount(undefined);
  };

  return (
    <div className={styles.Dapp}>
      <div>
        <div>MY DAPP</div>
      </div>

      <h3>Explore Web3</h3>

      <div className="connect">
        {currentAccount ? (
          <button onClick={onClickDisconnect}>Account: {currentAccount}</button>
        ) : (
          <button onClick={onClickConnect}>Connect MetaMask</button>
        )}
      </div>
    </div>
  );
};
export default Dapp;
