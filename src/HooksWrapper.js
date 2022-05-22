import {
  useAddWeb3ProviderListners,
  useGetWalletBalance,
  useInitializeWeb3,
  useOnInitialWeb3Run,
} from "./hooks/web3.hooks";

const HooksWrapper = ({ children }) => {
  useAddWeb3ProviderListners();
  useInitializeWeb3();
  useOnInitialWeb3Run();
  useGetWalletBalance();
  return <>{children}</>;
};

export default HooksWrapper;
