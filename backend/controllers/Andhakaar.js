import Andhkaar from "../models/andhakaar.js";

export const getAndhakaar = async (req, res) => {
    const docs = await Andhkaar.find({});
    res.json(docs);
}

export const createAndhakaar = async (req, res) => {
    try {
        let user = new Andhkaar();
        let data = req.body;
        let id = req.user.id;
        
        let entry = await Andhkaar.findOne({UserId:id});

        if (entry) {
            res.status(401).json({ success: false, msg: "You have Already Registered for this Event" });
            return;
        }

        user.teamName = data.teamName;
        user.teamLeadName = data.teamLeadName;
        user.instituteName = data.instituteName;
        user.vid_link = data.vid_link;
        user.script_link = data.script_link;
        user.payment_link = data.payment_link;

        await user.save();

        res.status(200).json({ success: true, user });

    } catch (err) {
        res.status(403).json({ success: false, err: err.message, yay: "Asda" });
        return;
    }
}
