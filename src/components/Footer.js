import React, { Fragment, useMemo } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <Fragment>
      <footer className="footer">
        <p>Copyright Dani.com &copy; {currentYear}</p>

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
      </footer>
    </Fragment>
  );
};

export default Footer;
