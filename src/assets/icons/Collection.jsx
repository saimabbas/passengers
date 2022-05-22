import React from "react";

const Collection = (props) => {
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
        d="M22.168 8.70848V4.16848C22.168 2.75848 21.528 2.18848 19.938 2.18848H15.898C14.308 2.18848 13.668 2.75848 13.668 4.16848V8.69848C13.668 10.1185 14.308 10.6785 15.898 10.6785H19.938C21.528 10.6885 22.168 10.1185 22.168 8.70848Z"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.168 19.9585V15.9185C22.168 14.3285 21.528 13.6885 19.938 13.6885H15.898C14.308 13.6885 13.668 14.3285 13.668 15.9185V19.9585C13.668 21.5485 14.308 22.1885 15.898 22.1885H19.938C21.528 22.1885 22.168 21.5485 22.168 19.9585Z"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.668 8.70848V4.16848C10.668 2.75848 10.028 2.18848 8.43797 2.18848H4.39797C2.80797 2.18848 2.16797 2.75848 2.16797 4.16848V8.69848C2.16797 10.1185 2.80797 10.6785 4.39797 10.6785H8.43797C10.028 10.6885 10.668 10.1185 10.668 8.70848Z"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.668 19.9585V15.9185C10.668 14.3285 10.028 13.6885 8.43797 13.6885H4.39797C2.80797 13.6885 2.16797 14.3285 2.16797 15.9185V19.9585C2.16797 21.5485 2.80797 22.1885 4.39797 22.1885H8.43797C10.028 22.1885 10.668 21.5485 10.668 19.9585Z"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Collection;
