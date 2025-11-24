const Question = require("../models/questionModel.js");

const MAX_QUESTION_COUNT = 30;

// Get Question
const getQuestions = async (req, res) => {
  try {
    const questions = await Question.aggregate([
      { $sample: { size: MAX_QUESTION_COUNT } },
      { $project: { question: 1, options: 1 } },
    ]);
    console.log(questions);
    res.status(200).json({ success: true, questions });
  } catch (error) {
    console.error("Error fetching questions", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const addAnswer = async (req, res) => {
  try {
    // optionid & value & questionId
    const { qId, answer } = req.body;

    if (!qId || !answer) {
      return res.status(400).json({
        success: false,
        message: "Bad request - need qId and answer",
      });
    }

    const questions = await Question.findById(qId);
    if (!questions) {
      return res.status(400).json({
        success: false,
        message: "No Question Found",
      });
    }

    const isCorrect = questions.answer.id === answer.id;

    return res.status(200).json({
      success: true,
      status: isCorrect ? 1 : 0,
      message: `${isCorrect ? "correct" : "wrong"} answer ${
        isCorrect ? "😁" : "😣"
      }`,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { getQuestions, addAnswer };
