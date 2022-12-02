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
          <InstagramIcon
            onClick={() =>
              window.open("https://www.instagram.com/_dani.svs/", "_blank")
            }
          />
          <Twitter />
          <LinkedInIcon
            onClick={() =>
              window.open("https://www.linkedin.com/in/danisvs/", "_blank")
            }
          />
        </div>
      </div>
      <p>&copy; 2022 Dani.com</p>
    </div>
  );
}

export default Footer;
