const express = require("express");
const {
  createQuiz,
  getAllQuizzes,
  getQuizDetails,
  submitQuiz,
} = require("../controllers/quizController");
const protect = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", protect, createQuiz);
router.get("/", getAllQuizzes);
router.get("/:id", getQuizDetails);
router.post("/:id/submit", submitQuiz);

module.exports = router;
