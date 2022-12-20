import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/ContactIcons.css";

function ContactIcons() {
  return (
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
  );
}

export default ContactIcons;
