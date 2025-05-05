import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../Context/QuizContext"
import generateQuestions from "../Services/generate";
import QuizLoadingScreen from "../Components/QuizLoadingScreen";


const QuizSetup = () => {
  const { setParams , setQuizData } = useQuiz();
  const navigate = useNavigate();

  const [language, setLanguage] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [numQuestions, setNumQuestions] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userParams = {
      language,
      difficulty,
      numQuestions,
      questionType: "single",
    };

    setParams(userParams);
    try {
      setLoading(true)
      const questions = await generateQuestions(userParams.numQuestions , userParams.difficulty , userParams.language);
      if(questions){
        setQuizData(questions);
        navigate("/quiz");
      }
    } catch (error) {
      setLoading(false);
      alert("Question not available try again ");
      navigate("/");
    }
    
  };

  return (
   <>
     {loading ? <QuizLoadingScreen /> : 
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl p-6 bg-gray-800 shadow-2xl rounded-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Quiz Setup</h2>
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block font-medium mb-1">Programming Language:</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              required
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a language</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="HTML/CSS">HTML/CSS</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Difficulty:</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Number of Questions:</label>
            <input
              type="number"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              min={1}
              max={20}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
    }
   
   </>
  );
};

export default QuizSetup;
