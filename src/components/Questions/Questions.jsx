import React, { useState } from "react";
import style from "./Questions.module.css";
import { motion } from "framer-motion";

function Questions(props) {
  const { myId, question, response, questionmyId } = props;
  const valid = questionmyId === myId;
  const responseVariants = {
    hidden: { y: -10, opacity: 0, display: "none" },
    visible: { display: "block", y: 0, opacity: 1 },
  };

  return (
    <div className={style.question}>
      <div className={style.question_container}>
        <div className={style.question}>{question}</div>
        <p className={style.expand}>+</p>
      </div>
      <motion.div
        className={style.question_response}
        initial="hidden"
        animate={valid ? "visible" : "hidden"}
        variants={responseVariants}
      >
        {response}
      </motion.div>
      {/* {valid && <div className={style.question_response}>{response}</div>} */}
    </div>
  );
}

export default Questions;
