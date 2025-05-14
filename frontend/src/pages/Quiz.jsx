import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../Context/QuizContext";

const Quiz = () => {
  const {
    quizData,
    userAnswers,
    setUserAnswers,
    currentQuestion,
    setCurrentQuestion,
    setScore,
  } = useQuiz();

  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();

  const question = quizData[currentQuestion];

  // Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          handleNext(); // Auto next when time runs out
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion]);

  const handleAnswer = (option) => {
    if (selectedOption) return;

    setSelectedOption(option);

    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = option;
    setUserAnswers(updatedAnswers);

    if (option === question.options[question.correctIndex]) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      handleNext();
    }, 500);
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setTimeLeft(30);
    } else {
      navigate("/result");
    }
  };

  if (!question) {
    return (
      <div className="text-white text-center p-6">
        No questions available. Go back and start again.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl p-6 shadow-2xl text-white">
        <div className="flex justify-between mb-4">
          <span className="text-blue-400 font-semibold">
            Question {currentQuestion + 1} of {quizData.length}
          </span>
          <span className="font-semibold">⏱ {timeLeft}s</span>
        </div>

        <h2 className="text-xl font-bold mb-6">{question.question}</h2>

        <div className="space-y-4">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              className={`w-full p-3 rounded text-left font-medium transition
                ${
                  selectedOption === option
                    ? "bg-blue-600"
                    : "bg-gray-700 hover:bg-blue-500"
                }`}
              onClick={() => handleAnswer(option)}
              disabled={!!selectedOption}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
