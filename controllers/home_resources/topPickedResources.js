import topPickedResources from "../../models/home_resources/topPickedResources.js";

// add Top Picked Resources section in zawiyah home page
export const addTopPickedResources = async (req, res) => {
    const ress = topPickedResources(req.body);
    // console.log(req.body)
    try {
        await ress.save();
        res.status(200).json({ message: "success" });
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}



// update Top Picked Resources section in zawiyah home page
export const updateTopPickedResources = async (req, res) => {
    const af = req.body;
    const id = af._id
    var query = { '_id': id };
    const newData = topPickedResources(af);

    try {
        await topPickedResources.findOneAndUpdate(query, newData, { upsert: true });
        res.status(201).json({ message: "successfully updated" });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

// get top Picked Resources section in zawiyah home page
export const getTopPickedResources = async (req, res) => {
    try {
        const data = await topPickedResources.find();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteTopPickedResources = async (req, res) => {
    const id = req.body.id;
    // console.log(id)
    try {
        await topPickedResources.findOneAndUpdate({ _id: id }, { isDeleted: true }, { upsert: true });
        res.status(201).json({ message: "successfully deleted" });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}