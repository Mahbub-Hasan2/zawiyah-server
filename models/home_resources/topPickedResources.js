import mongoose from "mongoose";

// about Founder Schema for home page
const topPickedResourcesSchema = mongoose.Schema({    
    title: String,
    url: String,
    isDeleted :  {
        type: Boolean,
        default: false
    }
});

const topPickedResources = mongoose.model("hrTopPickedResources", topPickedResourcesSchema);
export default topPickedResources;