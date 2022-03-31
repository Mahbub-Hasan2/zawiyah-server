import mongoose from "mongoose";

// about Founder Schema for home page
const aboutZawiyahSchema = mongoose.Schema({    
    name: String,
    bio: String,
    description: String,
    img: String,
});

const aboutZawiyah = mongoose.model("hrAboutZawiyah", aboutZawiyahSchema);
export default aboutZawiyah;