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

module.exports = { getQuestions };
