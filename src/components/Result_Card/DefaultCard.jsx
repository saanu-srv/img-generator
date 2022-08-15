import React from "react";
import Snake from "../../asset/Images/Snakes_Black.jpg";
import "./DefaultCard.css";

const DefaultCard = () => {
  return (
    <div className="card">
      <img src={Snake} alt="Logo" className="snake-logo" />
    </div>
  );
};

export default DefaultCard;
