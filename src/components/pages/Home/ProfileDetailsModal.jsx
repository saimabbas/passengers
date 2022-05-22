import axios from "axios";
import React, { useRef, useState } from "react";
import { MdClear } from "react-icons/md";
import Metamask from "../../../assets/img/metamask.png";
import { WalletUserContext } from "../../../contexts/wallet-context";
import { TYPES } from "../../../contexts/wallet-context/Types";
import { getSubscription, handleSubscription } from "../../../services/subscription";
import { shortenAddress } from "../../../utils/constants";

const ProfileDetailsModal = ({ hideProfileDetailsModal }) => {
  const { state, dispatch, disconnectWallet } = WalletUserContext();
  const { account } = state;

  const [imageUrl, setImageUrl] = useState("");

  // catch input value by using useRef hook
  const nameRef = useRef();
  const emailRef = useRef();
  const photoRef = useRef();

  const handleDisconnect = () => {
    disconnectWallet();
    hideProfileDetailsModal();
  };

  // handle image uploader (image upload by api in imgBB)
  const imageUploadHandler = (e) => {
    e.preventDefault();
    // setIsUpLoading(true);
    const imageData = new FormData();
    imageData.set("key", "7256d8cdf830e40a85f3ee4e91c7b4cb"); // set api key
    imageData.append("image", photoRef.current.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((res) => {
        setImageUrl(res.data.data.url);
        // setIsUpLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const handleUpdateSubscription = async () => {
    
      let payload = {};
      if (account) {
        const userSubscription = await getSubscription(account);
        payload = { userSubscription };
      }
      dispatch({
        type: TYPES.UPDATE_CONNECTED_WALLET,
        payload: payload,
      });
 
  };

  const handleSubscriptionAndUpdateWallet = async (e) => {
    await handleSubscription(e, photoRef, nameRef, emailRef, imageUrl, account)
    handleUpdateSubscription();
  }
  return (
    <div className="wlupdatemodal">
      <div className="wlupdatecontent">
        <MdClear onClick={hideProfileDetailsModal} />
        <div className="wlupdatemainbox">
          <div className="wlupdateleft">
            <p>Wallet</p>
            <div className="wlloadingdiv"></div>
            <button className="light-blue-btn-filled">SUBSCRIBE RENEWAL</button>
            <h6>
              You are secured Until <span>Oct 22nd, 2022</span>
            </h6>
          </div>
          <div className="wlupdateright">
            <p>Account info</p>
            <div className="wlupinput">
              <label htmlFor="">Picture</label>
              <input onChange={imageUploadHandler} ref={photoRef} type="file" placeholder="Enter Your Profile Picture" />
            </div>
            <div className="wlupinput">
              <label htmlFor="">Display Name</label>
              <input ref={nameRef} type="text" placeholder="Enter Your Name" />
            </div>
            <div className="wlupinput">
              <label htmlFor="">Email</label>
              <input ref={emailRef} type="text" placeholder="Enter Your Email Address" />
            </div>
            <button className="dark-blue-btn-filled" onClick={handleSubscriptionAndUpdateWallet}>Update Profile</button>
          </div>
        </div>
      </div>
      <div className="wlwalletdisconnect">
        <div className="wlwallettext">
          <p>My Address Wallet</p>
          <h6>{shortenAddress(account)}</h6>
        </div>
        <button className="light-blue-btn-filled" onClick={handleDisconnect}>
          <img src={Metamask} alt="Metamask" /> DISCONNECT METAMASK
        </button>
      </div>
    </div>
  );
};

export default ProfileDetailsModal;
