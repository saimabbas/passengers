import { getSubscription } from "../../services/subscription";
import { updateproviderInStore } from "../../utils/constants";
import { EthereumMainnet } from "../../utils/network.confgs";
import { TYPES } from "./Types";

export default function actions(state = {}, dispatch = () => {}) {
  let { provider, web3Instance, Web3 } = state;

  /**
   * @info this will load web3 library using dynamic import. by importing dynamically we minimize the main bundle size
   */
  const loadWeb3JS = async () => {
    const { default: web3 } = await import(
      "web3" /* webpackChunkName: "web3-main" */
    );
    dispatch({ type: TYPES.WEB3_JS_LOADED, payload: web3 });
  };

  const connectMetamask = async () => {
    const { ethereum } = window;
    if (!ethereum) return window.open("https://metamask.io/download", "_blank");
    await ethereum.request({
      method: "eth_requestAccounts",
    });

    handleProviderChange(ethereum);
  };

  /**
   * @dev this will display web3 modal with options. once user selects provider it will update the seleted provider and wallet address in application state.
   */
  const handleProviderChange = async (provider) => {
    const web3Instance = new Web3(provider);
    const account = await web3Instance.eth.getCoinbase();

    const userSubscription = await getSubscription(account);
    dispatch({
      type: TYPES.WALLET_CONNECTED,
      payload: {
        web3Instance,
        account,
        provider,
        userSubscription
      },
    });
    updateproviderInStore(true);
  };

  /**
   *
   * @dev this function creates request for the network changes in metmaks. if the requested netwok is not available it will request to add it in metmask.
   * @params chainId is the hex string of the chain Id. default is set to Binance mainnet
   */
  const switchChain = async (chainId = "0x1") => {
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId }],
      });
    } catch (err) {
      // if no chain found request to add
      if (err.code === 4902 || /Unrecognized chain ID/.test(err.message)) {
        await provider.request({
          method: "wallet_addEthereumChain",
          params: EthereumMainnet,
        });
      }
    }
  };

  const disconnectWallet = async () => {
    dispatch({
      type: TYPES.DISCONNECT_WALLET,
    });
    updateproviderInStore(false);
  };

  /**
   * @dev it returns current selected blockchain network in metamask
   * @return it returns current selected blockchain network in hex
   */
  const getChainId = async () => {
    if (!web3Instance) return null;
    const chainId = await web3Instance.eth.getChainId();
    return chainId;
  };

  /**
   * @dev it reads the balance of connected account.
   * @param {string} is valid ethereum address or EOA
   * @return it returns the balance of connected account in ETH
   */
  const getAccountBalance = async (account) => {
    if (!web3Instance || !account) return 0;
    const balance = await web3Instance.eth.getBalance(account);
    const balInEth = await web3Instance.utils.fromWei(
      balance.toString(),
      "ether"
    );
    return balInEth;
  };
  return {
    state,
    dispatch,
    switchChain,
    getChainId,
    loadWeb3JS,
    connectMetamask,
    getAccountBalance,
    disconnectWallet,
  };
}
