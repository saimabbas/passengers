import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdEast,
} from "react-icons/md";
import VerifiedIcon from "../../../assets/icons/VerifiedIcon";

const VaultCollectionCard = (props) => {
  return (
    <div className="vault-grid-card">
      <div className="user-details-box">
        <div className="user-details-box-img">
          <img src={props.userImg} alt="VaultProfilePic" />
        </div>
        <div>
          <h6>
            {props.userName} <VerifiedIcon color="#50C8FB" />
          </h6>
          <p>{props.noOfItems} items</p>
        </div>
      </div>
      <div className="vault-grid-card-bottom">
        <div className="vault-swiper">
          {props.children}
          <span
            className={`round-chevron-box vault-swiper-left ${props.swiperIconLeft}`}
          >
            <MdKeyboardArrowLeft />
          </span>
          <span
            className={`round-chevron-box vault-swiper-right ${props.swiperIconRight}`}
          >
            <MdKeyboardArrowRight />
          </span>
        </div>
      </div>
      <a href="https://www.youtube.com/" className="view-more-link-box">
        <p>View all items</p>
        <span>
          <MdEast />
        </span>
      </a>
    </div>
  );
};

export default VaultCollectionCard;
