import React from "react";
import "./Home.scss";
import video from "../../assets/HeroesoftheStorm1.mp4";
import tank from "../../assets/role-tank.webp";
import bruiser from "../../assets/role-bruiser.webp";
import support from "../../assets/role-support.webp";
import healer from "../../assets/role-healer.webp";
import meleAssasain from "../../assets/role-melee-assassin.webp";
import assasain from "../../assets/role-ranged-assassin.webp";
import ranked from "../../assets/ranked-icon-badges.webp";

const Home = () => {
  return (
    <div>
      <div className="initial-banner">
        <h1>Welcome to the Nexus!</h1>
        <p>
          In this realm between realms, anything is possible! Choose from dozens
          of legendary heroes from the Blizzard pantheon, customize their
          talents and abilities on the fly, and fight on a wide variety of
          innovative battlefields. This isn't just any MOBA - it's Heroes of the
          Storm!
        </p>
      </div>

      <section>
        <video
          className="video-container"
          autoPlay
          poster="../../../assets/heroes-of-the-storm bg.webp"
          muted
          loop
        >
          <source src={video} type="video/mp4" />
        </video>
      </section>
      <div className="mid-banner">
        <h2>Functions</h2>
        <p>
          The heroes are divided into the following categories so that you can
          find the feature that best suits your style of play:
        </p>
      </div>
      <section className="main">
        <div className="main-role">
          <img src={tank} alt="icon tank" />
          <h3>Tank</h3>
          <p>
            Tanks are formidable giants that protect their team by absorbing
            enemy attacks and slowing their advance.
          </p>
        </div>
        <div className="main-role">
          <img src={bruiser} alt="icon bruiser" />
          <h3>Bruiser</h3>
          <p>
            Aggressors are tough fighters capable of also dishing out a moderate
            amount of damage.
          </p>
        </div>
        <div className="main-role">
          <img src={support} alt="icon support" />
          <h3>Support</h3>
          <p>
            Support heroes primarily provide buffs and other benefits to their
            allies.
          </p>
        </div>
        <div className="main-role">
          <img src={healer} alt="icon healer" />
          <h3>Healers</h3>
          <p>
            Healers focus primarily on healing their allies and mitigating
            damage.
          </p>
        </div>
        <div className="main-role">
          <img src={meleAssasain} alt="icon melee assassin" />
          <h3>Melee Assassin</h3>
          <p>
            Melee Assassins are offensive heroes that deal high damage and do so
            by getting very close to their targets.
          </p>
        </div>
        <div className="main-role">
          <img src={assasain} alt="icon ranged assassin" />
          <h3>Ranged Assassin</h3>
          <p>
            Ranged Assassins are fragile heroes with the ability to deal massive
            damage from afar.
          </p>
        </div>
      </section>
      <section className="ranked">
        <img src={ranked} alt="" />
        <h2>Ranked: League of the Storm</h2>
        <p>
          Defeat your enemies and rank up to Grand Master alone or in a group.
        </p>
      </section>
    </div>
  );
};

export default Home;
