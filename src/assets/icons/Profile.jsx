import React from "react";

const Profile = (props) => {
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
        d="M10.6688 12.8786C13.2388 12.8786 15.3287 10.7986 15.3287 8.21859C15.3287 5.63859 13.2488 3.55859 10.6688 3.55859C8.09876 3.55859 6.00879 5.63859 6.00879 8.21859C6.00879 10.7986 8.09876 12.8786 10.6688 12.8786Z"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.6689 22.1885C18.6689 18.5885 15.0789 15.6685 10.6689 15.6685C6.25895 15.6685 2.66895 18.5885 2.66895 22.1885"
        stroke={props.color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.8287 11.9584L20.2988 13.6884C20.1688 13.8184 19.9988 13.9284 19.8188 13.9784L18.4788 14.2784C18.1888 14.3384 17.9588 14.1584 17.9788 13.8584L18.0588 12.4884C18.0688 12.2984 18.1387 12.1084 18.2787 11.9684L19.8088 10.2384C20.2788 9.6784 21.1288 9.6084 21.6888 10.0884C22.2388 10.5584 22.3087 11.3984 21.8287 11.9584Z"
        stroke={props.color}
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
    </svg>
  );
};

export default Profile;
