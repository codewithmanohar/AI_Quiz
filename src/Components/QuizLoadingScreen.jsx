

const QuizLoadingScreen = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-6"></div>
        <h2 className="text-2xl font-semibold text-blue-400">Generating your Quiz...</h2>
        <p className="mt-2 text-gray-400">Hang tight! We're crafting some brain-bending questions for you.</p>
      </div>
    );
  };
  
  export default QuizLoadingScreen;
  


// const QuizLoadingScreen = () => {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
//         {/* Spinner */}
//         {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-6"></div> */}
  
//         {/* Message */}
//         <h2 className="text-2xl font-semibold text-blue-400">Generating your Quiz</h2>
  
//         {/* Typing Dots */}
//         <div className="flex space-x-1 mt-2">
//           <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
//           <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//           <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//         </div>
  
//         {/* Subtext */}
//         <p className="mt-4 text-gray-400 text-sm">Hang tight! AI is crafting smart questions just for you.</p>
//       </div>
//     );
//   };
  
//   export default QuizLoadingScreen;
  