import React from "react";
import styles from "./JudgingCriteria.module.css";
import Button from "../Button/Button";

function JudgingCriteria() {
  return (
    <>
      <div className={styles.judgingCriteria_container}>
        <div className={styles.judgingCriteria_Image_container}></div>
        <div className={styles.judgingCriteria_contents}>
          <h3 className={styles.component_header}>
            Judging Criteria <br />
            <span className={styles.judgingCriteria_highlight}>
              Key Attributes
            </span>
          </h3>

          <p className={styles.judgingCriteria_p}>
            <span className={styles.judgingCriteria_p_title}>
              Innovation and Creativity :{" "}
            </span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features
          </p>
          <p className={styles.judgingCriteria_p}>
            <span className={styles.judgingCriteria_p_title}>
              Functionality :{" "}
            </span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
          <p className={styles.judgingCriteria_p}>
            <span className={styles.judgingCriteria_p_title}>
              Impact and Relevance :{" "}
            </span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className={styles.judgingCriteria_p}>
            <span className={styles.judgingCriteria_p_title}>
              Technical Complexity :{" "}
            </span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className={styles.judgingCriteria_p}>
            <span className={styles.judgingCriteria_p_title}>
              Adherence to Hackathon Rules :{" "}
            </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>

          <div className={styles.joinUsButton}>
            <Button value="Join Us" />
          </div>
        </div>
      </div>
    </>
  );
}

export default JudgingCriteria;
