import express from "express";
import  {getQuestion} from "../Controllers/ai.contoller.js"

const router = express.Router();

router.post("/get-question" , getQuestion);

export default router ; 

