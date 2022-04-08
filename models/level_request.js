import mongoose from "mongoose";
const levelSchema = mongoose.Schema({    
    uid : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    c_level : Number,
    d_level : Number,    
    completed :  {
        type: Boolean,
        default: false
    },
    status: {
        type: String, 
        enum: ['requested', 'accepted', 'canceled'],
        default: 'requested'
    },
});

const level_request = mongoose.model("levelRequest", levelSchema);
export default level_request;