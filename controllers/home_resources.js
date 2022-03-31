import aboutFounder from "../models/home_resources.js";

// add About Founder section in zawiyah home page
// export const addAboutFounder = async (req, res) => {
//     const ress = aboutFounder(req.body);
//     // console.log(req.body)
//     try {
//         await ress.save();
//         res.status(200).json({ message: "success" });
//     }
//     catch (error) {
//         res.status(404).json({ message: error.message })
//     }
// }

// update About Founder section in zawiyah home page
export const updateAboutFounder = async (req, res) => {
    const af = req.body;
    const id = af._id
    var query = { '_id': id };
    const newData = aboutFounder(af);

    try {
        await aboutFounder.findOneAndUpdate(query, newData, { upsert: true });
        res.status(201).json({ message: "successfully updated" });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

// get About Founder section in zawiyah home page
export const getAboutFounder = async (req, res) => {
    try {
        const data = await aboutFounder.find();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}