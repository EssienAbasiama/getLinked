import React from "react";
import styles from "./PPT.module.css";
import Button from "../Button/Button";

function PrivacyPolicyAndTerms() {
  return (
    <>
      <div className={styles.ppt_container}>
        <div className={styles.ppt_contents}>
          <h3 className={styles.component_header}>
            PrivacyPolicy and <br />
            <span className={styles.ppt_highlight}>Terms</span>
          </h3>
          <div className={styles.ppt_last_update}>
            Last updated on September 12, 2023
          </div>

          <p className={styles.ppt_p}>
            Below are our privacy & policy, which outline a lot of goodies.
            <br /> it’s our aim to always take of our participant
          </p>

          <div className={styles.ppt_content_container}>
            <div className={styles.ppt_content_container_note}>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </div>
            <p className={styles.licensing_policy}>Licensing Policy</p>
            <div className={styles.licensing_policy_note}>
              Here are terms of our Standard License:
            </div>
            <div className={styles.licensing_policy_listings}>
              <div className={styles.list}>
                <div className={styles.check}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                    <path
                      d="M5 8L7 10.5L13.5 6"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div className={styles.listing_note}>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.check}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                    <path
                      d="M5 8L7 10.5L13.5 6"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div className={styles.listing_note}>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </div>
              </div>
              <div className={styles.ppt_readMore_Button}>
                <Button value="Read More" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ppt_Image_container}>
          <div className={styles.ppt_padlock_img}></div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicyAndTerms;
