import express from "express"
import { getAboutFounder, updateAboutFounder } from "../controllers/home_resources/aboutFounder.js";
import { addAboutZawiyah, getAboutZawiyah, updateAboutZawiyah } from "../controllers/home_resources/aboutZawiyah.js";
import { addTopPickedResources, deleteTopPickedResources, getTopPickedResources, updateTopPickedResources } from "../controllers/home_resources/topPickedResources.js";

const router = express.Router();
router.post("/get/aboutFounder", getAboutFounder);
router.post("/update/aboutFounder", updateAboutFounder);

// -----------

router.post("/add/aboutZawiyah", addAboutZawiyah);
router.post("/get/aboutZawiyah", getAboutZawiyah);
router.post("/update/aboutZawiyah", updateAboutZawiyah);

// -----------

router.post("/add/tpr", addTopPickedResources);
router.get("/get/tpr", getTopPickedResources);
router.post("/update/tpr", updateTopPickedResources);
router.post("/delete/tpr", deleteTopPickedResources);


export default router;