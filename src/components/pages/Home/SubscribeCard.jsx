import React from "react";
import Tick from "../../../assets/icons/Tick";

const SubscribeCard = (props) => {
  return (
    <div className="subscribe-grid-card">
      <div className={`top-notch ${props.topNotchColor}`}></div>
      <h3>{props.tier}</h3>
      <h4>{props.eth} </h4>
      <div className="subscribe-options-grid">
        <div className={`subscribe-options-grid-entry ${props.isNotActive1}`}>
          <Tick color="#2BD182" />
          <p>3 Drops from The Whitelist (Season 1)</p>
        </div>
        <div className={`subscribe-options-grid-entry ${props.isNotActive2}`}>
          <Tick color="#2BD182" />
          <p>Access to Community Prize Pools</p>
        </div>
        <div className={`subscribe-options-grid-entry ${props.isNotActive3}`}>
          <Tick color="#2BD182" />
          <p>Voting Rights for Future Pools, Drops and artist Collaborations</p>
        </div>
        <div className={`subscribe-options-grid-entry ${props.isNotActive4}`}>
          <Tick color="#2BD182" />
          <p>Early Mint access (Higher Change of a legendary item)</p>
        </div>
        <div className={`subscribe-options-grid-entry ${props.isNotActive5}`}>
          <Tick color="#2BD182" />
          <p>Launchpad Access </p>
        </div>
        <div className={`subscribe-options-grid-entry ${props.isNotActive6}`}>
          <Tick color="#2BD182" />
          <p>“Elixir” air drop</p>
        </div>
        <div className={`subscribe-options-grid-entry ${props.isNotActive7}`}>
          <Tick color="#2BD182" />
          <p>Acces to “The inner Circle”</p>
        </div>
        <div className={`subscribe-options-grid-entry ${props.isNotActive8}`}>
          <Tick color="#2BD182" />
          <p>Yield Farming access and yield farming prize pool</p>
        </div>
        <div className={`subscribe-options-grid-entry ${props.isNotActive9}`}>
          <Tick color="#2BD182" />
          <p>Partnered projects Whitelist Spots </p>
        </div>
        <div className={`subscribe-options-grid-entry ${props.isNotActive10}`}>
          <Tick color="#2BD182" />
          <p>Early Access to Season 2 with The Whitelist</p>
        </div>
      </div>
      <div className="subscribe-btn-box">
        <button className="light-blue-btn-filled">GET STARTED</button>
      </div>
    </div>
  );
};

export default SubscribeCard;
