import React from "react";

const Bell = (props) => {
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
        d="M12.3487 2.98633C9.0387 2.98633 6.3487 5.67633 6.3487 8.98633V11.8763C6.3487 12.4863 6.0887 13.4163 5.7787 13.9363L4.6287 15.8463C3.9187 17.0263 4.4087 18.3363 5.7087 18.7763C10.0187 20.2163 14.6687 20.2163 18.9787 18.7763C20.1887 18.3763 20.7187 16.9463 20.0587 15.8463L18.9087 13.9363C18.6087 13.4163 18.3487 12.4863 18.3487 11.8763V8.98633C18.3487 5.68633 15.6487 2.98633 12.3487 2.98633Z"
        stroke={props.color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M14.1985 3.27611C13.8885 3.18611 13.5685 3.11611 13.2385 3.07611C12.2785 2.95611 11.3585 3.02611 10.4985 3.27611C10.7885 2.53611 11.5085 2.01611 12.3485 2.01611C13.1885 2.01611 13.9085 2.53611 14.1985 3.27611Z"
        stroke={props.color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.3486 19.1362C15.3486 20.7862 13.9986 22.1362 12.3486 22.1362C11.5286 22.1362 10.7686 21.7962 10.2286 21.2562C9.68863 20.7162 9.34863 19.9562 9.34863 19.1362"
        stroke={props.color}
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default Bell;
