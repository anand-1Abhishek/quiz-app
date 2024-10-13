const Quiz = require("../models/quiz");

const createQuiz = async (req, res) => {
  const { title, description, questions } = req.body;
  try {
    const quiz = new Quiz({ title, description, questions });
    await quiz.save();
    res.status(201).json(quiz);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getQuizDetails = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.json(quiz);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

const submitQuiz = async (req, res) => {
  const { answers } = req.body;
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    if (!answers || answers.length !== quiz.questions.length) {
      return res.status(400).json({ message: "Invalid number of answers" });
    }

    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score++;
      }
    });

    res.json({ score, totalQuestions: quiz.questions.length });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createQuiz,
  getAllQuizzes,
  getQuizDetails,
  submitQuiz,
};
