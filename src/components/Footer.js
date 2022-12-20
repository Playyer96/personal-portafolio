import React, { Fragment, useMemo } from "react";
import ContactIcons from "./ContactIcons";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <Fragment>
      <footer className="footer">
        <p>Copyright Dani.com &copy; {currentYear}</p>

        <ContactIcons />
      </footer>
    </Fragment>
  );
};

export default Footer;
