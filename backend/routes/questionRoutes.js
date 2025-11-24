const express = require("express");
const { getQuestions } = require("../controllers/questionController.js");

const questionRouter = express.Router();

questionRouter.get("/", getQuestions);

module.exports = questionRouter;
