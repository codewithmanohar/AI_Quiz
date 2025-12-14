import { QuizProvider } from "./Context/QuizContext"
import { Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import QuizSetup from "./pages/QuizSetup"
import Quiz from "./pages/Quiz"
import Result from "./pages/Result"
import NotFound from "./pages/NotFound"
import Footer from "./Components/Footer"


function App(){
  return (
   <>
     <QuizProvider>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setup" element={<QuizSetup />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
     </QuizProvider>
   </>
  )
}

export default App
