import React from "react";
import MessagesIcon from "../../assets/icons/MessagesIcon";
import MoonIcon from "../../assets/icons/MoonIcon";
import WalletIcon from "../../assets/icons/WalletIcon";
import { MdClear } from "react-icons/md";
import Logo from "../../assets/img/Logo";
import SunIcon from "../../assets/icons/SunIcon";
import { WalletUserContext } from "../../contexts/wallet-context";
import { shortenAddress } from "../../utils/constants";

const HeaderMob = (props) => {
  const { state, connectMetamask, disconnectWallet } = WalletUserContext();
  const { account, isWalletConnected } = state;
  const handleWalletButton = () => {
    if (!isWalletConnected) return connectMetamask();
    disconnectWallet();
  };

  return (
    <div className="headermobilecontent">
      <div className="headermobicon">
        <div className="headermic-left">
          <div className="mobmenubox">
            <div className="light-img" onClick={props.changeToDarkTheme}>
              <MoonIcon color="#1F194D" />
            </div>
            <div className="dark-img" onClick={props.changeToLightTheme}>
              <SunIcon color="#1F194D" />
            </div>
          </div>
          <div className="mobmenubox">
            <MessagesIcon color="#1F194D" />
          </div>
        </div>
        <div className="headermic-right">
          <div className="mobmenubox">
            <MdClear onClick={props.closeMobHeader} />
          </div>
        </div>
      </div>
      <div className="headermobtext">
        <div className="headermoblogo">
          <Logo color="#fff" />
          <h6>The White List</h6>
        </div>
        <div className="headermenuopt">
          <p>Subscribe</p>
          <p>Prize Pool</p>
          <p>Roadmap</p>
          <p>Upcoming Drops</p>
          <p>Meet the Team</p>
        </div>
        <button className="light-blue-btn-filled" onClick={handleWalletButton}>
          <WalletIcon color="#fff" />
          {isWalletConnected ? shortenAddress(account) : "Wallet"}
        </button>
      </div>
    </div>
  );
};

export default HeaderMob;
