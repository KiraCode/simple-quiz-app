import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";

const App = () => {
  const [viewScreen, setViewScreen] = useState("welcome");
  return <div>{viewScreen === "welcome" && <WelcomeScreen />}</div>;
};

export default App;
