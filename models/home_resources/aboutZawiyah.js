import mongoose from "mongoose";

// about Founder Schema for home page
const aboutZawiyahSchema = mongoose.Schema({    
    title: String,
    description: String,
    img: String,
    isDeleted :  {
        type: Boolean,
        default: false
    }
});

const aboutZawiyah = mongoose.model("hrAboutZawiyah", aboutZawiyahSchema);
export default aboutZawiyah;