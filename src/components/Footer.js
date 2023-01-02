import React, { useMemo } from "react";
import ContactIcons from "./ContactIcons";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="footer">
      <p>Copyright Dani.com &copy; {currentYear}</p>
      {/* <div className="connect-section"> */}
        {/* <h3>Connect:</h3> */}
        <ContactIcons />
      {/* </div> */}
    </footer>
  );
};

export default Footer;
