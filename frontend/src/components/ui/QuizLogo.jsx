import React from "react";
import Logo from "../../assets/quiz-logo.svg";

const allSizes = {
  small: 168,
  large: 300,
};
const QuizLogo = ({ size = "large" }) => {
  return <img src={Logo} alt="quiz logo" width={allSizes[size]} />;
};

export default QuizLogo;
