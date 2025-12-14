import { useNavigate } from "react-router-dom";
import { FaRobot, FaClock, FaCheckCircle, FaChartBar } from "react-icons/fa";
import FAQSection from "../Components/FAQSection";
import UserReview from "../Components/UserReview";
import { useEffect } from "react";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4 text-center">
        Welcome to QuizForge
      </h1>
      <p className="text-gray-300 text-lg md:text-xl mb-10 text-center max-w-2xl">
        Boost your coding knowledge with AI-generated questions. Choose your tech stack, difficulty, and challenge your brain!
      </p>

      {/* Start Button */}
      <button
        onClick={() => navigate("/setup")}
        className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-lg font-semibold transition mb-12"
      >
        🚀 Start Quiz
      </button>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaRobot className="text-blue-400 text-3xl mb-3" />
          <h3 className="text-xl font-bold mb-2">AI-Generated Questions</h3>
          <p className="text-gray-400">Questions are dynamically created based on your chosen programming language and difficulty.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaClock className="text-blue-400 text-3xl mb-3" />
          <h3 className="text-xl font-bold mb-2">30s Timer</h3>
          <p className="text-gray-400">Each question comes with a 30-second timer to test your quick thinking skills.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaCheckCircle className="text-blue-400 text-3xl mb-3" />
          <h3 className="text-xl font-bold mb-2">Single Answer MCQs</h3>
          <p className="text-gray-400">Answer carefully! Each question has one correct option, making it fair and focused.</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <FaChartBar className="text-blue-400 text-3xl mb-3" />
          <h3 className="text-xl font-bold mb-2">Instant Results</h3>
          <p className="text-gray-400">At the end of the quiz, view detailed feedback on each question and see your score instantly.</p>
        </div>
      </div>


{/* User Reviews */}
    <UserReview />


      {/* FAQ Section */}
    <FAQSection/>

    </div>
  );
};

export default Home;
