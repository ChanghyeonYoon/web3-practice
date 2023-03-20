import {useWeb3React} from "@web3-react/core";
import React from "react";
import {injected} from "@/libs/connectors";


export default function Home() {
  const {
    connector,
    library,
    chainId,
    account,
    active,
    error,
    activate,
    deactivate
  } = useWeb3React();

  const handleConnectWallet = React.useCallback(() => {
    if (active) {
      deactivate();
      return;
    }

    activate(injected, (error) => {
      console.log(error.message)
      if (/No Ethereum provider was found on window.ethereum/.test(error.message)) {
        window.open("https://metamask.io/download.html");
      }
    }).then(console.log)

  },[active, activate, deactivate]);
  console.log({account, chainId, active, error, connector, library})


  return (
    <>
      <div>
        <div>
          <p>Account: {account}</p>
          <p>ChainId: {chainId}</p>
        </div>
        <div>
          <button type="button" onClick={handleConnectWallet}>{active?'disconnect':'connect'}</button>
        </div>
      </div>
    </>
  )
}
