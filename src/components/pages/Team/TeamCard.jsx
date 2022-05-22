import React from "react";

const TeamCard = (props) => {
  return (
    <div className="team-grid-main">
      <img src={props.img} alt="" />
      <h6>{props.name}</h6>
      <p>{props.role}</p>
    </div>
  );
};

export default TeamCard;
