import React from "react";

const SunIcon = (props) => {
  return (
    <svg
      className={props.className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9999 24.6667C20.7864 24.6667 24.6666 20.7865 24.6666 16C24.6666 11.2136 20.7864 7.33337 15.9999 7.33337C11.2135 7.33337 7.33325 11.2136 7.33325 16C7.33325 20.7865 11.2135 24.6667 15.9999 24.6667Z"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.5201 25.52L25.3467 25.3466M25.3467 6.65329L25.5201 6.47996L25.3467 6.65329ZM6.48008 25.52L6.65341 25.3466L6.48008 25.52ZM16.0001 2.77329V2.66663V2.77329ZM16.0001 29.3333V29.2266V29.3333ZM2.77341 16H2.66675H2.77341ZM29.3334 16H29.2267H29.3334ZM6.65341 6.65329L6.48008 6.47996L6.65341 6.65329Z"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SunIcon;
