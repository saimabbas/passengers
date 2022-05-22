import React from "react";

const InfoIcon = (props) => {
  return (
    <svg
      className={props.className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99935 18.3334C14.6017 18.3334 18.3327 14.6025 18.3327 10.0001C18.3327 5.39771 14.6017 1.66675 9.99935 1.66675C5.39698 1.66675 1.66602 5.39771 1.66602 10.0001C1.66602 14.6025 5.39698 18.3334 9.99935 18.3334Z"
        stroke={props.color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99219 6.07495H10.0089"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.2165 13.925L10.8332 13.825C10.3332 13.7 9.98321 13.25 9.98321 12.7334V9.53337C9.98321 9.00003 9.60821 8.53337 9.07487 8.42503L8.7832 8.3667"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default InfoIcon;
