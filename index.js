import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import key  from "./config/keys.js";
import userRouter from './routes/user.js'


// import { deleteUser } from "./controllers/user.js";

const app = express();
app.use(bodyParser.json({limit:"20mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb", extended:true}));

app.use(cors());

// app.delete("/:email", deleteUser);

app.use("/user", userRouter);


const port = process.env.PORT || 5000


mongoose.connect(key.mongoURI) 
.then(() => app.listen(port, () => console.log(`Server started at port ${port}...`)))
.catch(err => console.log(err))
