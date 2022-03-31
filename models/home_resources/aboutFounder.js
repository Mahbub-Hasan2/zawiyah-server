import mongoose from "mongoose";

// about Founder Schema for home page
const aboutFounderSchema = mongoose.Schema({    
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
});

const aboutFounder = mongoose.model("hrAboutFounder", aboutFounderSchema);
export default aboutFounder;