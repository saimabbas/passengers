import React from "react";
import Logo from "../../../assets/img/Logo";

const HomeCollectionsCard = (props) => {
  return (
    <div className="collections-grid-card">
      <div className="cgc-top">
        <h6>
            <Logo className="light-img" color="#1F194D" />
            <Logo className="dark-img" color="#fff" />{" "}
          {props.collectionName}
        </h6>
      </div>
      <div className="cgc-bottom">
        <img src={props.collectionImg} alt="CollectionsCard" />
        <div className="coming-tag home-collection-ctag">
          {props.collectionComingTime} <span></span>
        </div>
      </div>
    </div>
  );
};

export default HomeCollectionsCard;
