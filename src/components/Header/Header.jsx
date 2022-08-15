import React from "react";
import logo from "../../asset/Images/Snake.png";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <h1>{props.title}</h1>
      </div>
    </>
  );
};

export default Header;
