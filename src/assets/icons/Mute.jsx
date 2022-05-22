import React from "react";

const Mute = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path
          d="M10.1 5.31726V4.63638C10.1 2.52282 8.65098 1.71428 6.88698 2.83489L4.84299 4.13281C4.61899 4.26757 4.35999 4.34559 4.10099 4.34559H3.09999C1.7 4.34559 1 5.05484 1 6.47333V9.31032C1 10.7288 1.7 11.4381 3.09999 11.4381H4.49999"
          stroke={props.color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.88672 12.948C8.65073 14.0686 10.0997 13.2529 10.0997 11.1465V8.56482"
          stroke={props.color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.7662 6.06152C13.3962 7.58609 13.2072 9.36594 12.1992 10.7274"
          stroke={props.color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.4045 4.91272C15.4334 7.38799 15.1254 10.2817 13.4805 12.5017"
          stroke={props.color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 0.799438L1 14.9829"
          stroke={props.color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default Mute;
