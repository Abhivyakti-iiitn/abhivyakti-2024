import Praanaant from "../models/Praanant.js";

export const getPraanant = async (req, res) => {
    const docs = await Praanaant.find({});
    res.json(docs);
}

export const createPraanant = async (req, res) => {
    try {
        let user = new Praanaant();
        let data = req.body.formData;
        let id = req.user.id;

        let entry = await Praanaant.findOne({ userId: id });

        if (entry) {
            res.status(401).json({ success: false, msg: "You have Already Registered for this Event" });
            return;
        }

        user.userId = id;
        user.regBy = req.regBy;
        user.regbyEmail = req.reqbyEmail;
        user.teamName = data.teamName;
        user.teamLeadName = data.teamLeadName;
        user.instituteName = data.instituteName;
        user.script_link = data.script_link;
        user.vid_link = data.vid_link;
        user.payment_link = data.payment_link;

        await user.save();

        res.status(200).json({ success: true, user });

    } catch (err) {
        res.status(403).json({ success: false, err: err.message, yay: "Asda" });
        return;
    }
}
