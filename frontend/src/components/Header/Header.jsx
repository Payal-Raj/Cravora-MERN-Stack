import React from "react";
import "./Header.css";
import Button from "../button/button";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content" data-aos="fade-in">
        <h2>Your Cravings, Our Priority.</h2>
        <p>
          Order from the best restaurants in town and enjoy fast,
          <br /> reliable delivery anytime, anywhere.
        </p>
        <a href="#explore-menu">
          <Button text="View Menu" />
        </a>
      </div>
    </div>
  );
};

export default Header;
