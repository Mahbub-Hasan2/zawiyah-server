import resources from "../models/resources.js"
export const addResource = async (req, res) => {
    const ress = resources(req.body);
    // console.log(req.body)
    try {
        await ress.save();
        res.status(200).json({ message: "success" });
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}
// export const updateResource = async (req, res)=>{    
//     try{
//         const requests = await level_request.find({completed:false});
//         res.status(409).json(requests);
//         } catch(err){
//         res.status(409).json({message: err.message});
//     }
// }

// new code mahbub // start
export const updateResource = async (req, res) => {
    const us = req.body;
    const id = us._id
    var query = { '_id': id };
    const newResource = resources(us);
    
    try {
        await resources.findOneAndUpdate(query, newResource, { upsert: true });
        res.status(201).json({ message: "successfully updated" });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

// new code mahbub // end

export const getResources = async (req, res) => {
    try {
        const requests = await resources.find({ isDeleted: false }).sort({ order: "desc" });
        res.status(409).json(requests);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}
export const deleteResource = async (req, res) => {
    const id = req.body.id;
    console.log(id)
    try {
        await resources.findOneAndUpdate({ _id: id }, { isDeleted: true }, { upsert: true });
        res.status(201).json({ message: "successfully deleted" });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}
