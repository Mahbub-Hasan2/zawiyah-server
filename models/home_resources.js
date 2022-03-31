import mongoose from "mongoose";
const aboutFounderSchema = mongoose.Schema({    
    name: String,
    bio: String,
    description: String,
    img: String,
});

const aboutFounder = mongoose.model("hrAboutFounder", aboutFounderSchema);
export default aboutFounder;