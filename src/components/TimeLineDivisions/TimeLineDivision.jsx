import React from "react";

function TimeLineDivision() {
  return (
    <div className={styles.timeLine_Skeleton_branches}>
      <div className={styles.left}>
        <h2>Hackathon Announcement</h2>
        <p>
          The getlinked tech hackathon 1.0 is formally announced to the general
          public and teams begin to get ready to register
        </p>
      </div>
      <div></div>
      <div className={styles.timeLineDate}>November 18, 2023</div>
    </div>
  );
}

export default TimeLineDivision;
