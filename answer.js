import express from "express"
import {
    getUserAnswer,
    addUserAnswer,
    getUserAnswersbyuid
    } 
    from '../controllers/answer.js'


const router = express.Router();
router.post("/", getUserAnswer);
router.post("/uid", getUserAnswersbyuid);
router.post("/add", addUserAnswer);


export default router;