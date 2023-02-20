import { createContext, useEffect, useReducer, useCallback } from "react"

import { ethers } from "ethers";
import Blobb from "../../artifacts/contracts/Blobb.sol/Blobb.json"

const CONTRACT_ADDRESS = "0xaDBd17B51aaF3348Efe68078d6DA4AaF0A1Ab487" //"0xaDBd17B51aaF3348Efe68078d6DA4AaF0A1Ab487" 

const EtherContext = createContext()

const ACTIONS = {INIT: "init", TRANSACTION: "transaction", RESET: "reset"}
const initialState = {account: null, provider: null, signer: null, contract: null, pending: null, chain: null}
const reducer = (state, action) => {
  const { type, data } = action
  switch (type) {
    case ACTIONS.INIT:
      return { ...state, ...data }
    case ACTIONS.TRANSACTION:
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
  
  const init = useCallback(async () => {
    console.log("INIT", state)
    if(window.ethereum) {
      // const provider = new ethers.providers.Web3Provider(window.ethereum)
      const provider = new ethers.providers.WebSocketProvider("wss://polygon-mumbai.g.alchemy.com/v2/QFAA0Sagc9TkEdfEyQfl7juZ0_ygIMMU", null, window.ethereum)
      // provider.ethereum = window.ethereum
      // const wsProvider = new ethers.providers.WebSocketProvider("ws://localhost:8545")
      // wsProvider.ethereum = window.ethereum
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // provider._websocket = wsProvider;
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // customProvider.pollingInterval = 12000; // use custom polling interval if necessary

      // provider._websocket = wsProvider;

      // const provider = new ethers.providers.Web3Provider(customProvider);
      const accounts = await window.ethereum.request({ method: "eth_accounts" })
      const account = accounts[0] 
      const signer = provider.getSigner()
      const chain = (await provider.getNetwork()).chainId
      console.log("SIGNER", signer, signer.getAddress(), ethers.utils.formatEther(await provider.getBalance(CONTRACT_ADDRESS)), chain)

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
    console.log("EVENTS")
    const events = ["chainChanged", "accountsChanged"]
    const handleChange = changed => {
      // 0x13881 mumbai
      console.log("EVENT OCCOURS", state, changed, changed.length, changed.length > 0)
      changed.length > 0 ? init() : disconnect()
    }

    events.forEach(e => window.ethereum.on(e, handleChange))
    return () => events.forEach(e => window.ethereum.removeListener(e, handleChange))
  }, [init, disconnect])

  const funcs = {
    connectWallet: connect,
    newWalletRequest: walletRequest,
  }

  return(
    <EtherContext.Provider value={{state, dispatch, funcs}}>
      {children}
    </EtherContext.Provider>
  )
}

export default EtherContext