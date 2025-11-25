import React from "react";
import QuizLogo from "./ui/QuizLogo";
import Card from "./ui/Card";
import clsx from "clsx";
import Button from "./ui/Button";
import ProgressBar from "./ui/ProgressBar";

const QuestionScreen = () => {
  return (
    <section className="question-section">
      <QuizLogo />
      <ProgressBar />
      <div className="question-content">
        <Card className="question-card">
          <div className="question-number">2/30</div>
          <p className="question-text">What is the Capital of India?</p>
          <div className="question-options">
            <button className={clsx("option")}>
              1 <span>New Delhi</span>
            </button>
          </div>
          <div className="question-options">
            <button className={clsx("option")}>
              2 <span>Mumbai</span>
            </button>
          </div>
          <div className="question-options">
            <button className={clsx("option")}>
              3 <span>Bengaluru</span>
            </button>
          </div>
          <div className="question-options">
            <button className={clsx("option")}>
              4 <span>Kolkata</span>
            </button>
          </div>
          <Button size="small">Next</Button>
        </Card>
      </div>
    </section>
  );
};

export default QuestionScreen;
