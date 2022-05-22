import React from "react";

const RefreshIcon = (props) => {
  return (
    <svg
    className={props.className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4297 12.8535C22.4297 18.3735 17.9497 22.8535 12.4297 22.8535C6.90969 22.8535 3.53969 17.2935 3.53969 17.2935M3.53969 17.2935H8.05969M3.53969 17.2935V22.2935M2.42969 12.8535C2.42969 7.33352 6.86969 2.85352 12.4297 2.85352C19.0997 2.85352 22.4297 8.41352 22.4297 8.41352M22.4297 8.41352V3.41352M22.4297 8.41352H17.9897"
        stroke={props.color}
        strokeWidth="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RefreshIcon;
