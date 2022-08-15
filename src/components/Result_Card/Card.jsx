import React from "react";
import "./Card.css";

const Card = (props) => {
  const url = `https://source.unsplash.com/1600x1080/?${props.name}`;
  return (
    <>
      <div className="card">
        <img src={url} alt={props.name} className="image" />
      </div>
    </>
  );
};

export default Card;
