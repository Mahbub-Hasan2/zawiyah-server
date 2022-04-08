import level_request from "../models/level_request.js"
import user from "../models/user.js"
export const requestLevelChange = async (req, res) => {
    const level = level_request(req.body);

    try {
        const requ = await level_request.find({ 'uid': req.body.uid });
        if (requ.length === 0) {
            await level.save();
            res.status(200).json({ message: "success" });
        }

        else {
            var query = { 'uid': req.body.uid };

            await level_request.findOneAndUpdate(query, {
                $set: { uid: req.body.uid, c_level: req.body.c_level, d_level: req.body.d_level, }
            }, { upsert: true });

            res.status(201).json({ message: "success" });
        }
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const getLevelChangeRequests = async (req, res) => {
    try {
        const requests = await level_request.find({ status: "canceled" });
        res.status(409).json(requests);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}
export const processLevelChangeRequest = async (req, res) => {
    const stat = req.body.status;
    try {
        if (stat === 'accepted') {
            // update user status
            const requ = await level_request.find({ 'uid': req.body.request_id });

            await user.findOneAndUpdate({ '_id': requ[0].uid },
                { "level": requ[0].d_level }, { upsert: true }
            );

            await level_request.findOneAndUpdate({ 'uid': requ[0].uid },
                { "status": "accepted" }, { upsert: true }
            );

            res.status(409).json({ message: "Successfully accepted" });
        }

        else if (stat === 'canceled') {
            // update user status
            const requ = await level_request.find({ 'uid': req.body.request_id });

            await level_request.findOneAndUpdate({ 'uid': requ[0].uid },
                { "status": "canceled" }, { upsert: true }
            );
            res.status(409).json({ message: "Successfully canceled" });
        }


    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}
