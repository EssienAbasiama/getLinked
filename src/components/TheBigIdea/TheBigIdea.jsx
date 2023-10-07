import React from "react";
import style from "./TheBigIdea.module.css";

function TheBigIdea() {
  return (
    <>
      <div className={style.thebigIdea_container}>
        <div className={style.theBigIdea_Image_container}>
          <div className={style.spiral}></div>
        </div>

        <div className={style.theBigIdea_contents}>
          <h3 className={style.component_header}>
            Introduction to getlinked <br />
            <span className={style.theBigIdea_highlight}>
              tech Hackathon 1.0
            </span>
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
      </div>
    </>
  );
}

export default TheBigIdea;
