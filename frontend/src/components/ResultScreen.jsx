import React from "react";
import QuizLogo from "./ui/QuizLogo";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Trophy from "../assets/trophy.png";
import RestartIcon from "../assets/restart-icon.svg";

function RestartIconFc() {
  return <img src={RestartIcon} alt="restart icon" />;
}

const ResultScreen = () => {
  return (
    <section className="result-section">
      <QuizLogo size="large" />
      <Card className="result-card">
        <div className="result-icon-wrapper">
          <img src={Trophy} alt="" />
        </div>
        <h1 className="result-text">GOOD JOB</h1>
        <div className="result-details">
          <span className="correct-answers">17</span>
          <p className="total-questions">
            Questions <br />
            out of <span className="weight-700">30</span>
          </p>
        </div>
        <Button size={'small'} icon={<RestartIconFc />} iconPosition="right">
          Restart
        </Button>
      </Card>
    </section>
  );
};

export default ResultScreen;
