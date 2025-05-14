import generateQuestions from "../Services/generateQuestion.js";


export const getQuestion = async (req , res) => {
     try {
        const {numQuestions, difficulty, language} = req.body ;
        
        console.log(numQuestions , difficulty , language)
        // prompt validation 
        if(!numQuestions || !difficulty || !language){
            return res.status(404).json({message : "All fields are required !"});
        }

        const questions = await generateQuestions(numQuestions, difficulty, language);
        return res.status(200).json(questions);
    } catch (error) {
        console.log("Error in getQuestion : " , error.message);
        res.status(500).send("Internal Server Error ");
    }
};