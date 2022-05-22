import React from "react";

const ChevronUp = (props) => {
  return (
    <svg
      className={props.className}
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.857742 4.48511L4.38493 0.965107L7.91211 4.48511"
        stroke={props.color}
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChevronUp;
