import React from 'react';

import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container" >
        <h4>&copy; {new Date().getFullYear()} Card Graphix. All rights reserved. &nbsp;</h4>
      </div>
    </footer>
  );
};

export default Footer;

//<Link to="/contact-us">Contact Us</Link>
