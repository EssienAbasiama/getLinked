import React, { useState } from "react";
import styles from "./Faq.module.css";
import Button from "../Button/Button";
import Questions from "../Questions/Questions";

function Faq() {
  const [questionmyId, setQuestionmyId] = useState(0);

  const giveanswer = (id) => {
    setQuestionmyId(id);
  };

  return (
    <>
      <div className={styles.faq_container}>
        <div className={styles.faq_contents}>
          <h3 className={styles.component_header}>
            Frequently Asked <br />
            <span className={styles.faq_highlight}>Questions</span>
          </h3>
          <div className={styles.faq_subheader}>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </div>
          <div onClick={() => giveanswer(1)}>
            <Questions
              questionmyId={questionmyId}
              myId={1}
              question="Can I work i started before the Hackathon?"
              response="Yes, You Are free to work on the Project you started before the Hackathon"
            />
          </div>

          <div onClick={() => giveanswer(2)}>
            <Questions
              questionmyId={questionmyId}
              myId={2}
              question="What happens when I need help during the Hackathon?"
              response="Yes, You Are free to work on the Project you started before the Hackathon"
            />
          </div>
          <div onClick={() => giveanswer(3)}>
            <Questions
              questionmyId={questionmyId}
              myId={3}
              question="What happens when i don't have an myIdea for a project?"
              response="Yes, You Are free to work on the Project you started before the Hackathon"
            />
          </div>
          <div onClick={() => giveanswer(4)}>
            <Questions
              questionmyId={questionmyId}
              myId={4}
              question="Can I join a team or do I have to come with one?"
              response="Yes, You Are free to work on the Project you started before the Hackathon"
            />
          </div>
          <div onClick={() => giveanswer(5)}>
            <Questions
              questionmyId={questionmyId}
              myId={5}
              question="What happens after the hackathon ends?"
              response="Yes, You Are free to work on the Project you started before the Hackathon"
            />
          </div>
          <div onClick={() => giveanswer(6)}>
            <Questions
              questionmyId={questionmyId}
              myId={6}
              question="Can I work i started before the Hackathon?"
              response="Yes, You Are free to work on the Project you started before the Hackathon"
            />
          </div>
        </div>

        <div className={styles.faq_Image_container}>
          <div className={styles.questionMark01} />
          <div className={styles.questionMark02} />
          <div className={styles.questionMark03} />
        </div>
      </div>
    </>
  );
}

export default Faq;
