import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="socialMedia">
          <InstagramIcon />
          <Twitter />
          <FacebookIcon />
          <LinkedInIcon />
        </div>
      </div>
      <p>&copy; 2022 Dani.com</p>
    </div>
  );
}

export default Footer;
