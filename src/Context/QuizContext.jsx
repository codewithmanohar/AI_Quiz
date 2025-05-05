import { createContext, useState, useContext } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [params, setParams] = useState({});
  const [questions, setQuestions] = useState([]);


  const value = {
    quizData,
    setQuizData,
    userAnswers,
    setUserAnswers,
    currentQuestion,
    setCurrentQuestion,
    score,
    setScore,
    params,
    setParams,
    questions,
    setQuestions
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = () => useContext(QuizContext);
