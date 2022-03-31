import mongoose from "mongoose";

// about Founder Schema for home page
const aboutFounderSchema = mongoose.Schema({    
    name: String,
    bio: String,
    description: String,
    img: String,
});

const aboutFounder = mongoose.model("hrAboutFounder", aboutFounderSchema);
export default aboutFounder;