import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Tech</span> news
      </h1>
      <p className={headerStyles.description}>Keep up to date with tech news</p>
    </div>
  );
};

export default Header;
