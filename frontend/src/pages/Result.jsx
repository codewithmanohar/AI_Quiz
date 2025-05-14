import { useQuiz } from "../Context/QuizContext";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const {
    quizData,
    userAnswers,
    score,
    setCurrentQuestion,
    setQuizData,
    setUserAnswers,
    setScore,
  } = useQuiz();

  const navigate = useNavigate();

  const handleRetake = () => {
    // Reset quiz state
    setCurrentQuestion(0);
    setQuizData([]);
    setUserAnswers([]);
    setScore(0);
    navigate("/"); // back to setup
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">🎉 Quiz Completed!</h1>
      <p className="text-xl mb-6">
        You scored <span className="text-blue-400 font-bold">{score}</span> out of{" "}
        {quizData.length}
      </p>

      <button
        onClick={handleRetake}
        className="mb-8 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold transition"
      >
        Retake Quiz
      </button>

      <div className="w-full max-w-3xl space-y-4">
        {quizData.map((q, index) => {
          const isCorrect = userAnswers[index] === q.options[q.correctIndex];
          return (
            <div
              key={index}
              className={`p-4 rounded-xl shadow ${
                isCorrect ? "bg-green-700" : "bg-red-700"
              }`}
            >
              <h2 className="font-semibold mb-2">
                Q{index + 1}: {q.question}
              </h2>
              <p>
                Your Answer:{" "}
                <span className="font-semibold">
                  {userAnswers[index] || "No Answer"}
                </span>
              </p>
              <p>
                Correct Answer:{" "}
                <span className="font-semibold text-white">{q.options[q.correctIndex]}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Result;
