import { QuizProvider } from "./Context/QuizContext"
import { Route , Routes } from "react-router-dom"
import Home from "./Pages/Home"
import QuizSetup from "./pages/QuizSetup"
import Quiz from "./Pages/Quiz"
import Result from "./Pages/Result"
import NotFound from "./Pages/NotFound"
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
