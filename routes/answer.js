import express from "express"
import {
    getUserAnswer,
    addUserAnswer,
    getUserAnswerbyid
    } 
    from '../controllers/answer.js'


const router = express.Router();
router.post("/", getUserAnswer);
router.post("/i", getUserAnswerbyid);
router.post("/add", addUserAnswer);


export default router;