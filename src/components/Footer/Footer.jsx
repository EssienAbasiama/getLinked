import React from "react";
import styles from "./Footer.module.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="flex_footer_01">
          <h2 className={styles.logo}>
            get<span className={styles.logolink}>Linked</span>
          </h2>
          <div className="flex_one_content">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </div>
          <div className="terms_of_use_container">
            <div className="tou_content">Terms of Use</div>
            <div className="terms_of_use_divider"></div>
            <div className="tou_content">Privacy Policy</div>
          </div>
        </div>
        <div className="flex_footer_02"></div>
        <div className="flex_footer_03"></div>
      </div>
      <div className="footer_copywrite">
        All rights reserved. © getlinked Ltd.
      </div>
    </div>
  );
}

export default Footer;
