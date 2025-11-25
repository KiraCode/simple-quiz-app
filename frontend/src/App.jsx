import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import QuestionScreen from "./components/QuestionScreen";

const App = () => {
  const [viewScreen, setViewScreen] = useState("question");
  return (
    <div>
      {viewScreen === "welcome" && <WelcomeScreen />}
      {viewScreen === "question" && <QuestionScreen />}
    </div>
  );
};

export default App;
