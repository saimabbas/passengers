import React from "react";

const UnMute = (props) => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.34146V8.44256C1 9.99311 1.70006 10.7684 3.10019 10.7684H4.10128C4.36031 10.7684 4.61933 10.8537 4.84335 11.001L6.88754 12.4197C8.6517 13.6447 10.1008 12.7531 10.1008 10.4505V3.3335C10.1008 1.02318 8.6517 0.139362 6.88754 1.3643L4.84335 2.78305C4.61933 2.93035 4.36031 3.01563 4.10128 3.01563H3.10019C1.70006 3.01563 1 3.79091 1 5.34146Z"
        stroke={props.color}
        stroke-width="1.5"
      />
      <path
        d="M12.2012 3.79077C13.4473 5.62836 13.4473 8.15602 12.2012 9.99361"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.4824 1.85266C15.5055 4.83747 15.5055 8.94642 13.4824 11.9312"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UnMute;
