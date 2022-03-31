import mongoose from "mongoose";

// about Founder Schema for home page
const aboutZawiyahSchema = mongoose.Schema({    
    title_en: String,
    title_ur: String,
    description_en: String,
    description_ur: String,
    img: String,
    isDeleted :  {
        type: Boolean,
        default: false
    }
});

const aboutZawiyah = mongoose.model("hrAboutZawiyah", aboutZawiyahSchema);
export default aboutZawiyah;