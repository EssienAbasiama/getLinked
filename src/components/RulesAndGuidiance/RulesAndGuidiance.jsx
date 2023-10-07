import React from "react";
import style from "./RulesAndGuidiance.module.css";

function RulesAndGuidiance() {
  return (
    <>
      <div className={style.rulesAndGuidiance_container}>
        <div className={style.rulesAndGuidiance_contents}>
          <h3 className={style.component_header}>
            Rules and <br />
            <span className={style.rulesAndGuidiance_highlight}>Guidiance</span>
          </h3>
          <p className={style.component_subheader}>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>

        <div className={style.rulesAndGuidiance_Image_container}></div>
      </div>
    </>
  );
}

export default RulesAndGuidiance;
