import React from "react";
import "./Footer.scss";
import logoBz from "../../assets/Blizzard_Entertainment_Logo_2015.png";

const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-imageContainer">
        <img
          className="footer-image"
          src={logoBz}
          alt="logo blizzard_entertainment"
        />
      </div>
      <div className="footer-paragraph">
        <p>©2022 Blizzard Entertainment, Inc.</p>
        <p>
          All rights reserved. All Trademarks referenced are the property of
          their respective owners.
        </p>
      </div>
      <div className="footer-linkContainer">
        <a
          class="footer-link"
          href="https://www.facebook.com/HeroesoftheStorm.es"
        >
          Facebook
        </a>
        <span> | </span>
        <a className="footer-link" href="https://www.youtube.com/BlizzHeroesES">
          Youtube
        </a>
        <span> | </span>
        <a className="footer-link" href="https://twitter.com/BlizzHeroesES">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Footer;
