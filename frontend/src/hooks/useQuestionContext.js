import { useContext } from "react";
import QuestionContext from "../context/QuestionContext.js";

function useQuestionContext() {
  return useContext(QuestionContext);
}

export default useQuestionContext;
