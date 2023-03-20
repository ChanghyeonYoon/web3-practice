import type { AppProps } from 'next/app'
import {StrictMode} from "react";
import {Web3ReactProvider} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import {ExternalProvider} from "@ethersproject/providers/src.ts/web3-provider";

function getLibrary(provider: ExternalProvider) {
  return new Web3Provider(provider, "any");
}

export default function App({ Component, pageProps }: AppProps) {
  return (
      <StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Component {...pageProps} />
        </Web3ReactProvider>
      </StrictMode>
  )
}
