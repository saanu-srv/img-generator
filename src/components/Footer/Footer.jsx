import React from "react";
import "./Footer.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <h4>
          Created with <FavoriteIcon className="heart" /> By Sourav
        </h4>

        <h4 className="copyright">
          Copyright <CopyrightIcon className="copy_icon" /> {year}
        </h4>
      </footer>
    </>
  );
};

export default Footer;
