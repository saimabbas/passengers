import { TYPES } from "./Types";

// state of the application
export const initialState = {
  acceptedChainId: "0x4",
  connectedChainId: null,
  isCorrectChain: false,

  account: null,
  isWalletConnected: false,
  userSubscription: {
    picture: "",
    name: ""
  },

  balance: null,
  isBalanceLoading: false,

  web3Instance: null,
  isWeb3InstanceInitialized: false,
  hasWeb3Provider: null,
  provider: null,

  WalletConnect: null,
  Web3: null,
  isWeb3Loaded: false,
};

export default function reducer(state, action) {
  switch (action.type) {
    case TYPES.DISCONNECT_WALLET:
      return {
        ...state,
        isWalletConnected: false,
        account: null,
        balance: null,
      };

    case TYPES.LOADING_BALANCE:
      return {
        ...state,
        isBalanceLoading: true,
      };
    case TYPES.UPDATE_BALANCE:
      return {
        ...state,
        ...action.payload,
        isBalanceLoading: false,
      };
    case TYPES.BALANCE_LOADING_FAILED:
      return {
        ...state,
        isBalanceLoading: false,
      };
    case TYPES.UDATE_CHAIN_DETAILS:
      return {
        ...state,
        ...action.payload,
      };

    case TYPES.WALLET_CONNECTED:
      return {
        ...state,
        isWalletConnected: true,
        ...action.payload,
      };
    case TYPES.UPDATE_CONNECTED_WALLET:
      return {
        ...state,
        ...action.payload,
        isWeb3InstanceInitialized: true,
      };

    case TYPES.WALLET_CONNECT_INITIALIZED:
      return {
        ...state,
        WalletConnect: action.payload,
      };

    case TYPES.WEB3_JS_LOADED:
      return {
        ...state,
        Web3: action.payload,
        isWeb3Loaded: true,
      };
    default:
      return state;
  }
}
