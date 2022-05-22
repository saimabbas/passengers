import React from "react";

const PrizePoolsOptionMobModal = (props) => {
  return (
    <div className="vo-info-box-content-mob">
      <div className="vo-info-box-content-mob-box">
        <h6>1x board ape NFT’s</h6>
        <p>
          The winner will get the choice of ape within the first 3 of floor
          price and purchased through openseas.io. Winner will get the choice of
          prize won or equivalent cash payout.
        </p>
        <button
          onClick={props.hideInfoBoxFun}
          className="light-blue-btn-outlined"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PrizePoolsOptionMobModal;
