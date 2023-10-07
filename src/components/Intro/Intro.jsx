import React, { useEffect } from "react";
import style from "./Intro.module.css";
import Button from "../Button/Button";
import ManOnGlasses from "./../../assets/man-wearing-smart-glasses.png";
import WorldGlow from "./../../assets/glowWorld.png";
import { motion, useAnimation } from "framer-motion";
import Chain from "./../../assets/chain.png";
import Star from "./../../assets/1f4a5.png";
function Intro() {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      rotate: [0, 360], // Rotate 360 degrees (one full rotation)
      transition: {
        duration: 60, // Duration of the rotation animation
        repeat: Infinity, // Infinite rotation
        ease: "linear",
        loop: Infinity,
      },
    });
  }, [controls]);
  return (
    <div className={style.intro}>
      <div className={style.title}>
        <h2>
          getlinked Tech
          <br /> Hackathon <span className={style.hackathon_number}>1.0</span>
        </h2>
        <div className={style.title_complement_images}>
          <div className={style.chain}> </div>
          <div className={style.fire}> </div>
        </div>
        <p className={style.subheading}>
          Participate in getlinked tech Hackathon 2023 stand
          <br /> a chance to win a Big prize
        </p>
        <Button
          className={style.intro_register}
          value="Register"
          link="www.google.com"
        />
        <p className={style.timer}>
          00<span className={style.subscript}>H</span> 00
          <span className={style.subscript}>M</span> 00
          <span className={style.subscript}>S</span>
        </p>
      </div>
      <div className={style.title_images}>
        <img className={style.manOnGlasses} src={ManOnGlasses} alt="" />
        <motion.div
          className={style.glowWorld}
          animate={controls} // Rotate 360 degrees
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }} // Infinite rotation
          style={{
            transformOrigin: "center,center", // Rotate around the center of the image
          }}
        ></motion.div>
      </div>
      <div className={style.renovation_container}>
        <p className={style.renovation}>
          Igniting a Revolution in HR Innovation
        </p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="255"
            height="17"
            viewBox="0 0 255 17"
            fill="none"
          >
            <path
              d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
              stroke="#FF26B9"
              stroke-width="5"
            />
          </svg>
        </div>
      </div>
      {/* <div style={backgroundImage}></div> */}
    </div>
  );
}

export default Intro;
