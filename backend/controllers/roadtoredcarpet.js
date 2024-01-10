import Roadtoredcarpet from "../models/roadtoredcarpet.js";

export const getroadtoredcarpet = async (req, res) => {
    const docs = await Roadtoredcarpet.find({});
    console.log("hii get");
    res.json(docs);
}

export const createroadtoredcarpet = async (req, res) => {
    try {
        let user = new Roadtoredcarpet();
        let data = req.body;
        let id = req.user.id;

        let entry = await Roadtoredcarpet.findOne({ UserId: id });

        if (entry) {
            res.status(401).json({ success: false, msg: "You have Already Registered for this Event" });
            return;
        }

        user.teamName = data.teamName;
        user.clgName = data.clgName;
        user.teamLeadName = data.teamLeadName;
        user.contact_phone = data.contact_phone;
        user.vid_link = data.vid_link;
        user.payment_link = data.payment_link;

        await user.save();
        console.log("hi post");

        res.status(200).json({ success: true, user });

    } catch (err) {
        res.status(403).json({ success: false, err: err.message, yay: "Asda" });
        return;
    }
}
