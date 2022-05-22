import React from "react";

const MoonIcon = (props) => {
  return (
    <svg
      className={props.className}
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.48348 16.5599C3.96348 23.4266 9.79015 29.0133 16.7635 29.3199C21.6835 29.5333 26.0835 27.2399 28.7235 23.6266C29.8168 22.1466 29.2301 21.1599 27.4035 21.4933C26.5101 21.6533 25.5901 21.7199 24.6301 21.6799C18.1101 21.4133 12.7768 15.9599 12.7501 9.51995C12.7368 7.78661 13.0968 6.14661 13.7501 4.65328C14.4701 2.99995 13.6035 2.21328 11.9368 2.91995C6.65681 5.14661 3.04348 10.4666 3.48348 16.5599Z"
        stroke={props.color}
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default MoonIcon;
