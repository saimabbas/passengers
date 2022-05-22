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
const CollectionsCard = (props) => {
  return (
    <div className="collections-grid-card-content">
      <div className={`top-notch ${props.topNotchColor}`}></div>
      <div className="collections-grid-card-left">
        <div className="collections-user-details-box">
          <div className="user-details-box-img">
            <img src={props.profileImg} alt="VaultProfilePic" />
          </div>
          <div>
            <h6>
              {props.collectionName} <VerifiedIcon color="#50C8FB" />
            </h6>
          </div>
        </div>
        <div className="collections-swiper-mob">
          <div className="collections-swiper-box">{props.children}</div>
        </div>
        <a href="https://www.youtube.com/" className="view-more-link-box">
          <p>View collection</p>
          <span>
            <MdEast />
          </span>
        </a>
      </div>
      <div className="collections-grid-card-right">
        <span
          className={`round-chevron-box collections-swiper-left ${props.swiperIconLeft}`}
        >
          <MdKeyboardArrowLeft />
        </span>
        <span
          className={`round-chevron-box collections-swiper-right ${props.swiperIconRight}`}
        >
          <MdKeyboardArrowRight />
        </span>
        <div className="collections-swiper-pc">
          <div className="collections-swiper-box">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsCard;
