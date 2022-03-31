import express from "express"
import { getAboutFounder, updateAboutFounder } from "../controllers/home_resources.js";

const router = express.Router();
router.post("/get/aboutFounder", getAboutFounder);
router.post("/update/aboutFounder", updateAboutFounder);

export default router;