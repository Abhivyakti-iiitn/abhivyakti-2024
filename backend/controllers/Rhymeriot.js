import Rhymeriot from "../models/Rhymeriot.js";

export const getRhymeriot = async (req, res) => {
    const docs = await Rhymeriot.find({});
    res.json(docs);
}

export const createRhymeriot = async (req, res) => {
    try {
        let user = new Rhymeriot();
        let data = req.body;
        let id = req.user.id;

        let entry = await Rhymeriot.findOne({ UserId: id });

        if (entry) {
            res.status(401).json({ success: false, msg: "You have Already Registered for this Event" });
            return;
        }

        user.bandName = data.bandName;
        user.leaderName = data.leaderName;
        user.contact_phone = data.contact_phone;
        user.leaderEmail = data.leaderEmail;
        user.aud_link = data.aud_link;
        user.vid_link = data.vid_link;
        user.instituteName = data.instituteName;
        user.yesno = data.yesno;
        user.instrumentsName = data.instrumentsName;
        user.payment_link = data.payment_link;

        await user.save();

        res.status(200).json({ success: true, user });

    } catch (err) {
        res.status(403).json({ success: false, err: err.message, yay: "Asda" });
        return;
    }
}
