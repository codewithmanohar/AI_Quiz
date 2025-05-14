import express from "express"
import dotenv from "dotenv";
import cors from "cors"
import aiRouter from "./Routes/ai.route.js"
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 8000 ; 


app.use("/api/ai", aiRouter);
app.get("/" , (req , res) =>{
    res.send("working ");
});

app.listen(PORT , () => {
    console.log(`Server is running PORT : ${PORT}`);
});