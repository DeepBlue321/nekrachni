import "./Footer.css";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <div className="footer__icon">
          <HomeIcon fontSize="large"  />
           <p className="footer__text">Domů</p>
        </div>
        
      </Link>
      <Link to="/obchod">
      <div className="footer__icon">
        <AccountBalanceWalletIcon fontSize="large"  />
        <p className="footer__text">Obchod</p>
        </div>
      </Link>
      <Link to="/profil">
      <div className="footer__icon">
        <PersonIcon fontSize="large" />
        <p className="footer__text">Profil</p>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
