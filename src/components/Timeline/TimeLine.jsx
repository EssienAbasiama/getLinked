import React from "react";
import styles from "./TimeLine.module.css";

function TimeLine() {
  return (
    <div>
      <div className={styles.TimeLineContainer}>
        <div className={styles.timeLine_header}>
          <h2 className={styles.timeLine_title}>TimeLine</h2>
          <p className={styles.timeLine_subTitle}>
            Here is the breakdown of the time we anticipate
            <br /> using for the upcoming event.
          </p>
        </div>
        <div className={styles.timeLine_Skeleton}>
          <div className={styles.left}>
            <div
              className={[styles.left_01, styles.timeLine_content_left].join(
                " "
              )}
            >
              <h2>Hackathon Announcement</h2>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div
              className={[
                styles.left_02,
                styles.timeLine_content_left,
                styles.timeLine_date,
              ].join(" ")}
            >
              November 18, 2023
            </div>
            <div
              className={[styles.left_03, styles.timeLine_content_left].join(
                " "
              )}
            >
              <h2>Hackathon Announcement</h2>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div
              className={[
                styles.left_04,
                styles.timeLine_content_left,
                styles.timeLine_date,
              ].join(" ")}
            >
              November 18, 2023
            </div>
            <div
              className={[styles.left_05, styles.timeLine_content_left].join(
                " "
              )}
            >
              <h2>Hackathon Announcement</h2>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div
              className={[
                styles.left_06,
                styles.timeLine_content_left,
                styles.timeLine_date,
              ].join(" ")}
            >
              November 18, 2023
            </div>
          </div>
          <div className={styles.center}>
            <div className={styles.center_rod_01}></div>
            <div className={styles.timeLine_number}>1</div>
            <div className={styles.center_rod_others}></div>
            <div className={styles.timeLine_number}>2</div>
            <div className={styles.center_rod_others}></div>
            <div className={styles.timeLine_number}>3</div>
            <div className={styles.center_rod_others}></div>
            <div className={styles.timeLine_number}>4</div>
            <div className={styles.center_rod_others}></div>
            <div className={styles.timeLine_number}>5</div>
            <div className={styles.center_rod_others}></div>
            <div className={styles.timeLine_number}>6</div>
          </div>
          <div className={styles.right}>
            <div
              className={[
                styles.right_01,
                styles.timeLine_content_right,
                styles.timeLine_date,
              ].join(" ")}
            >
              November 18, 2023
            </div>
            <div
              className={[styles.right_02, styles.timeLine_content_right].join(
                " "
              )}
            >
              <h2>Hackathon Announcement</h2>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div
              className={[
                styles.right_03,
                styles.timeLine_content_right,
                styles.timeLine_date,
              ].join(" ")}
            >
              November 18, 2023
            </div>
            <div
              className={[styles.right_04, styles.timeLine_content_right].join(
                " "
              )}
            >
              <h2>Hackathon Announcement</h2>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div
              className={[
                styles.right_05,
                styles.timeLine_content_right,
                styles.timeLine_date,
              ].join(" ")}
            >
              November 18, 2023
            </div>
            <div
              className={[styles.right_06, styles.timeLine_content_right].join(
                " "
              )}
            >
              <h2>Hackathon Announcement</h2>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
