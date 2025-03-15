
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { configureCors } from './config/cors-config.js';
import { addTimeStamp, requestLogger } from './middlewares/customMiddleware.js';
const app = express();
import { globalErrorHandler } from './utils/errorHandler.js';
import { urlVersion } from './middlewares/apiVersioning.js';


app.use('/api/v1', urlVersion('v1'));
app.use(configureCors());
app.use(requestLogger());
app.use(addTimeStamp());
app.use(globalErrorHandler);
const PORT = process.env.PORT || 8000;
app.use(express.json())




app.listen(PORT, ()=>{
    console.log(`Server started at port:${PORT}`)
})


