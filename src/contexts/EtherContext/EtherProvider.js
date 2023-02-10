import { createContext, useEffect, useReducer, useCallback } from "react"

import { ethers } from "ethers";
import Blobb from "../../artifacts/contracts/Blobb.sol/Blobb.json"

/* --------- */
import { configureChains, createClient, WagmiConfig } from "wagmi"
import { useAccount, useNetwork } from "wagmi"

import { EthereumClient, modalConnectors, walletConnectProvider } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

import { mainnet, polygon, polygonMumbai, hardhat } from "wagmi/chains";
/* --------- */

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3" //"0x2e235D7cb26386A661B293B18F9B33148D600c96" 




/* --------- */
const chains = [hardhat, polygon, polygonMumbai, mainnet];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: process.env.REACT_APP_WALLET_CONNECTION_ID }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: process.env.REACT_APP_WALLET_CONNECTION_ID,
    version: "2",
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

/* --------- */

const EtherContext = createContext()

const ACTIONS = {INIT: "init", SET: "set", TRANSACTION: "transaction", RESET: "reset"}
const initialState = {account: null, provider: null, signer: null, contract: null, pending: null, chain: null}
const reducer = (state, action) => {
  const { type, data } = action
  switch (type) {
    case ACTIONS.INIT:
      return { ...state, ...data }
    case ACTIONS.TRANSACTION:
      return { ...state, ...data }
    case ACTIONS.SET:
      return { ...state, ...data }
    case ACTIONS.RESET:
      return { ...state, ...initialState }
    default:
      return state
      // throw new Error("Undefined reducer action type")
  }
}

export function EtherProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { address } = useAccount()
  const { chain, chains } = useNetwork()
  
  const init = useCallback(async (account, chain) => {
    console.log("INIT", state)
    if(window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // const provider = new ethers.providers.WebSocketProvider("ws://localhost:8545")
      /* const accounts = await window.ethereum.request({ method: "eth_accounts" }) */
      // const account = accounts[0] 
      const signer = provider.getSigner()
      // const chain = (await provider.getNetwork()).chainId
      console.log("SIGNER", signer, chain, typeof account, ethers.utils.formatEther(await provider.getBalance(CONTRACT_ADDRESS)), chain)

      let contract
      try {
        contract = new ethers.Contract(CONTRACT_ADDRESS, Blobb.abi, signer)
      } catch (err) {
        console.error(err)
      }
      dispatch({type: ACTIONS.INIT, data: { account, provider, signer, contract, chain }})
    }
    else 
      alert("Install MetaMask!")
  }, [])

  const connect = async () => {
    console.log("CONNECT", state)
    await window.ethereum.request({ method: "eth_requestAccounts" })
  }

  const disconnect = useCallback(() => {
    console.log("DISCONNECT")
    dispatch({type: ACTIONS.RESET})
  }, [])

  const walletRequest = async (tName, tDesc, tFunc) => {
    if(state.pending) return
    
    const pending = {txName: tName, txDesc: tDesc}
    dispatch({type: ACTIONS.TRANSACTION, data: { pending }})
    try {
      await tFunc()
      const pending = null
      dispatch({type: ACTIONS.TRANSACTION, data: { pending }})
    } catch(err) {
      console.error(err)
      const pending = null
      dispatch({type: ACTIONS.TRANSACTION, data: { pending }})
    }
  }

  useEffect(() => {
    if(!window.ethereum) return alert("Install MetaMask!")

    //FIRST OPENING
    const tryInit = async () => {
      try {
        await init()
        dispatch({type: ACTIONS.INIT, data: {init: true}})
      } catch (err) {
        console.error(err)
      }
    }
    console.log("TRY INIT")
    tryInit()

    //EVENTS HANDLER
    // console.log("EVENTS")
    // const events = ["chainChanged", "accountsChanged"]
    // const handleChange = changed => {
    //   // 0x13881 mumbai
    //   console.log("EVENT OCCOURS", state, changed, changed.length, changed.length > 0)
    //   changed.length > 0 ? init() : disconnect()
    // }

    // events.forEach(e => window.ethereum.on(e, handleChange))
    // return () => events.forEach(e => window.ethereum.removeListener(e, handleChange))
  }, [init, disconnect])

  useEffect(() => {
    console.log("ADDDRRRESS", address, chain)
    address === undefined ? disconnect() : init(address, chain && chain.id)
  }, [address, chain])
  

  const funcs = {
    connectWallet: connect,
    newWalletRequest: walletRequest,
  }

  return(
    <>
    <WagmiConfig client={wagmiClient}>
      <EtherContext.Provider value={{state, dispatch, funcs}}>
        {children}
      </EtherContext.Provider>
    </WagmiConfig>

    <Web3Modal projectId={process.env.REACT_APP_WALLET_CONNECTION_ID} ethereumClient={ethereumClient} />
    </>
  )
}

export default EtherContext