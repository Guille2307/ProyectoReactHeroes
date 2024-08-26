import React, { useContext } from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import logoHero from "../../assets/logo-heroes-large-e140cd832b.png";
import diablo from "../../assets/logo-di-01f9ac836ec31eed.png";
import hot from "../../assets/logo-heroes-78cae505b7a524fb.png";
import over from "../../assets/logo-ow-4be5755bc0a4cbaf.png";
import Sc from "../../assets/logo-sc2-6e33583ba0547b6a.png";
import Wc from "../../assets/logo-wow-3dd2cfe06df74407.png";
import { JwtContext } from "../../shared/context/JwtContext";

const Header = () => {
  
  const { jwt, setJwt } = useContext(JwtContext);
  let navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    setJwt(null);
    navigate("/logout");
    window.location.reload(true);
  };

  return (
    <div className="header">
      <div className="header-imageContainer">
        <img className="header-image" src={logoHero} alt="logo heroes" />
      </div>
      <div className="header-linkContainer">
        <Link className="header-link" to="/">
          Home
        </Link>

        <Link className="header-link" to="/heroes">
          Heroes
        </Link>

        <Link className="header-link" to="/fields">
          Fields
        </Link>

        {jwt && (
          <>
            <Link className="header-link" to="/create-heroes">
              Create Heroes
            </Link>
          </>
        )}
        {!jwt && (
          <Link className="header-link" to="/register">
            Register
          </Link>
        )}

        {!jwt && (
          <Link className="header-link" to="/login">
            Login
          </Link>
        )}

        {jwt && (
          <>
            <Link onClick={logOut} className="header-link" to="/Logout">
              Logout
            </Link>
          </>
        )}
      </div>
      <div className="header-iconContainer">
        <img className="header-icon" src={diablo} alt="logo Diablo" />
        <img className="header-icon" src={hot} alt="Logo HOT" />
        <img className="header-icon" src={over} alt="Logo Overwach" />
        <img className="header-icon" src={Sc} alt="Logo Sc" />
        <img className="header-icon" src={Wc} alt="Logo Wc" />
      </div>
    </div>
  );
};

export default Header;
