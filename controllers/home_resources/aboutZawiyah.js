import aboutZawiyah from "../../models/home_resources/aboutZawiyah.js";


// add About Zawiyah section in zawiyah home page
export const addAboutZawiyah = async (req, res) => {
    const ress = aboutZawiyah(req.body);
    // console.log(req.body)
    try {
        await ress.save();
        res.status(200).json({ message: "success" });
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}



// update About Zawiyah section in zawiyah home page
export const updateAboutZawiyah = async (req, res) => {
    const af = req.body;
    const id = af._id
    var query = { '_id': id };
    const newData = aboutZawiyah(af);

    try {
        await aboutZawiyah.findOneAndUpdate(query, newData, { upsert: true });
        res.status(201).json({ message: "successfully updated" });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

// get About Zawiyah section in zawiyah home page
export const getAboutZawiyah = async (req, res) => {
    try {
        const data = await aboutZawiyah.find();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}