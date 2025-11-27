import React, { useCallback, useEffect, useMemo, useState } from "react";
import QuestionContext from "../context/QuestionContext.js";

const QuestionProvider = ({ children }) => {
  // api calling, functions, properties
  const [questions, setQuestions] = useState([]);
  const [activeQuestionId, setActiveQuestionId] = useState("");

  const processQuestions = useCallback((questionAPIResponse) => {
    setQuestions(
      questionAPIResponse.map((question) => ({
        ...question,
        hasAttempted: false,
        isAnswerCorrect: false,
      }))
    );
    setActiveQuestionId(questionAPIResponse[0]._id);
  });

  const activeQuestion = useMemo(
    () => questions.find((question) => question._id === activeQuestionId) + 1,
    [activeQuestionId, questions]
  );

  const activeQuestionNumber = useMemo(
    () =>
      questions.findIndex((question) => question._id === activeQuestionId) + 1,
    [activeQuestionId, questions]
  );

  const totalNoOfQuestion = useMemo(() => questions.length, [questions]);

  const updateQuestioStatus = useCallback(
    (iisAnswerCorrect) => {
      setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question._id === activeQuestionId
            ? { ...question, hasAttempted: true, isAnswerCorrect }
            : question
        )
      );
    },
    [activeQuestionId]
  );

  useEffect(() => {
    // this code will run AFTER the component re-renders due to 'questions' changing
    console.log("Question state have been updated", questions);
    // check the console here to see if hasAttempted is true for the correct option
  }, [questions]);

//   activeNextQuestion
// 1 -> 2
//  10 -> last question

  return (
    <QuestionContext.Provider value={{}}>{children}</QuestionContext.Provider>
  );
};

export default QuestionProvider;
