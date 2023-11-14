import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
console.log({PORT});

app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`);
});