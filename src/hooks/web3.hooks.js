import { useEffect } from "react";
import { WalletUserContext } from "../contexts/wallet-context/";
import { TYPES } from "../contexts/wallet-context/Types";
import { getSubscription } from "../services/subscription";
import { getStatusProviderFromStore } from "../utils/constants";

/**
 * @note this hook should only be called inside the Web3Context. otherwise it will not work properly
 * @dev  this custom hook will run when the webpage loads. it will listen for changes in network (blockchain network) and account.
 */
export const useAddWeb3ProviderListners = () => {
  const {
    dispatch,
    state: { provider, acceptedChainId },
    switchChain,
  } = WalletUserContext();

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", async (accounts) => {
        let payload = {
          isWalletConnected: false,
          account: null,
        };
        if (accounts && accounts.length) {
          const userSubscription = await getSubscription(accounts[0]);
          payload = { isWalletConnected: true, account: accounts[0], userSubscription };
        }
        dispatch({
          type: TYPES.UPDATE_CONNECTED_WALLET,
          payload: payload,
        });
      });
    //  network event listeners
    provider &&
      provider.on("chainChanged", async (chainId) => {
        const isCorrectChain = parseInt(acceptedChainId) === parseInt(chainId);
        dispatch({
          type: TYPES.UDATE_CHAIN_DETAILS,
          payload: {
            isCorrectChain: isCorrectChain,
            connectedChainId: chainId,
          },
        });
        if (!isCorrectChain) await switchChain(acceptedChainId);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);
};

export const useInitializeWeb3 = () => {
  const { loadWeb3JS } = WalletUserContext();

  useEffect(() => {
    loadWeb3JS();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useOnInitialWeb3Run = () => {
  const {
    dispatch,
    state: { acceptedChainId, isWeb3InstanceInitialized },
    connectMetamask,
    switchChain,
    getChainId,
  } = WalletUserContext();
  useEffect(() => {
    (async () => {
      if (!isWeb3InstanceInitialized) return null;

      //  this method will fetch the current connected blockchain network
      const chainId = await getChainId();

      //  if the connected network is not as required it will ask to switch it
      if (parseInt(acceptedChainId) !== parseInt(chainId))
        await switchChain(acceptedChainId);
      else
        dispatch({
          type: TYPES.UDATE_CHAIN_DETAILS,
          payload: {
            isCorrectChain: true,
            connectedChainId: chainId,
          },
        });
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWeb3InstanceInitialized]);
};

export const useWalletConnectStatus = () => {
  const {
    connectMetamask,
    state: { isWeb3Loaded },
  } = WalletUserContext();
  useEffect(() => {
    const isProviderConnectd = getStatusProviderFromStore();
    if (isProviderConnectd && isWeb3Loaded) connectMetamask();
  }, [isWeb3Loaded]);
};
export const useGetWalletBalance = () => {
  const {
    dispatch,
    state: { account, web3Instance },
    getAccountBalance,
  } = WalletUserContext();

  useEffect(() => {
    (async () => {
      if (account) {
        try {
          dispatch({ type: TYPES.LOADING_BALANCE });
          const bal = await getAccountBalance(account);
          dispatch({ type: TYPES.UPDATE_BALANCE, payload: { balance: bal } });
        } catch (err) {
          dispatch({ type: TYPES.BALANCE_LOADING_FAILED });
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);
};
