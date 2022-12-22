import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/ContactIcons.css";

function ContactIcons() {
  return (
    <div className="socialMedia">
      <InstagramIcon
        onClick={() =>
          window.open("https://www.instagram.com/_dani.svs/", "_blank")
        }
      />
      <TwitterIcon />
      <LinkedInIcon
        onClick={() =>
          window.open("https://www.linkedin.com/in/danisvs/", "_blank")
        }
      />
    </div>
  );
}

export default ContactIcons;
