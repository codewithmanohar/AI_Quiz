import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey : "AIzaSyBW4FMooGK8mBkYJezk5wtQ1TAVdO1iYN4"}); 

async function generateQuestions(numQuestions, difficulty, programmingLanguage) {

  const systemInstruction = `You are an expert in generating single-choice questions for programming languages. The user will specify the number of questions, the difficulty level (e.g., easy, medium, hard), and the programming language. Your task is to generate the specified number of unique single-choice questions in the requested language and difficulty. Each question should have four plausible options, and you must clearly indicate the index of the correct answer (0-based). The final output should be a JSON array of question objects in the following format:

[
  {
    "question": "...",
    "options": ["...", "...", "...", "..."],
    "correctIndex": number
  },
  ...
]

Ensure the questions are relevant to the specified programming language and difficulty level. Avoid generating duplicate questions.`;

  const prompt = `Generate ${numQuestions} single-choice questions for ${programmingLanguage} with a difficulty level of ${difficulty}.`;

  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash", // Using "gemini-pro" for potentially better structured output
      contents: prompt,
      config : {
        temperature : 0.7 ,  // Adjust as needed
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
        systemInstruction : systemInstruction ,
      }
     
    });
    const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text;
    if (responseText) {
      // Extract JSON from the Markdown code block if present
      const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/);
      const jsonString = jsonMatch ? jsonMatch[1].trim() : responseText.trim();

      try {
        const questions = JSON.parse(jsonString);
        if (Array.isArray(questions) && questions.every(q => q.question && Array.isArray(q.options) && q.options.length === 4 && typeof q.correctIndex === 'number' && q.correctIndex >= 0 && q.correctIndex <= 3)) {
          return questions;
        } else {
          console.error("Generated response is not in the expected JSON format:", jsonString);
          return null;
        }
      } catch (error) {
        console.error("Error parsing JSON response:", error, jsonString);
        return null;
      }
    } else {
      console.warn("No response text received from Gemini API.");
      return null;
    }
  } catch (error) {
    console.error("Error generating content:", error);
    return null;
  }
}



// async function runExample() {
//   const numberOfQuestions = 3;
//   const questionDifficulty = "medium";
//   const language = "Python";

//   const generatedQuestions = await generateSingleChoiceQuestions(numberOfQuestions, questionDifficulty, language);

//   if (generatedQuestions) {
//     console.log(JSON.stringify(generatedQuestions, null, 2));
//   }
// }

  // runExample();


export default generateQuestions;