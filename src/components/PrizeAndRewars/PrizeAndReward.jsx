import React from "react";
import styles from "./PriceAndReward.module.css";

function PrizeAndReward() {
  return (
    <div className={styles.PrizeAndReward_container}>
      <div className={styles.priceandreward_image}></div>
      <div className={styles.priceandreward_content}>
        <div className={styles.PrizeAndReward_content_top}>
          <h3 className={styles.component_header}>
            Prizes and <br />
            <span className={styles.PriceAndReward_highlight}>Rewards</span>
          </h3>
          <p className={styles.component_subheader}>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className={styles.trophies}>
          <div className={styles.second_runnerup}>
            <div className={styles.second_runnerup_image}></div>
            <div className={styles.position}>2nd</div>
            <div className={styles.runner}>Runnner</div>
            <div className={styles.amount}>N300,000</div>
          </div>
          <div className={styles.first_runnerup}>
            <div className={styles.first_runnerup_image}></div>
            <div className={[styles.position, styles.position_first].join(" ")}>
              1st
            </div>
            <div className={styles.runner}>Runnner</div>
            <div className={styles.amount}>N400,000</div>
          </div>
          <div className={styles.third_runnerup}>
            <div className={styles.third_runnerup_image}></div>
            <div className={styles.position}>3nd</div>
            <div className={styles.runner}>Runnner</div>
            <div className={styles.amount}>N150,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizeAndReward;
