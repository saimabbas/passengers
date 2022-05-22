import React from "react";

const Tick = (props) => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.34961 5.9999L6.12889 9.77323L13.7008 2.22656"
        stroke={props.color}
        strokeWidth="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Tick;
