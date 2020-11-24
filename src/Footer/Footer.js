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
        <HomeIcon fontSize="large" className="footer__icon" />
      </Link>
      <Link to="/obchod">
        <AccountBalanceWalletIcon fontSize="large" className="footer__icon" />
      </Link>
      <Link to="/profil">
        <PersonIcon fontSize="large" className="footer__icon" />
      </Link>
    </div>
  );
};

export default Footer;
