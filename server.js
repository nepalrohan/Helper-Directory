
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { configureCors } from './config/cors-config.js';
import { addTimeStamp, requestLogger } from './middlewares/customMiddleware.js';
const app = express();


app.use(configureCors());
app.use(requestLogger());
app.use(addTimeStamp());

const PORT = process.env.PORT || 8000;
app.use(express.json())




app.listen(PORT, ()=>{
    console.log(`Server started at port:${PORT}`)
})


