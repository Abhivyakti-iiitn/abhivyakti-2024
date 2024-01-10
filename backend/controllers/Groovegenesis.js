import GrooveGenesis from "../models/groove.js";

export const getGroovegenesis = async (req, res) => {
    const docs = await GrooveGenesis.find({});
    res.json(docs);
}

export const createGroovegenesis = async (req, res) => {
    try {
        let user = new GrooveGenesis();
        let data = req.body.formData;
        let id = req.user.id;

        let entry = await GrooveGenesis.findOne({ userId: id });

        if (entry) {
            res.status(401).json({ success: false, msg: "You have Already Registered for this Event" });
            return;
        }

        user.userId = id;
        user.regBy = req.regBy;
        user.regbyEmail = req.reqbyEmail;
        user.participantName = data.participantName;
        user.contact_phone = data.contact_phone;
        user.Email = data.Email;
        user.instituteName = data.instituteName;
        user.instrumentsName = data.instrumentsName;
        user.instagramID = data.instagramID;
        user.yesno = data.yesno;
        user.instrumentsNameBacktrack = data.instrumentsNameBacktrack;
        user.vid_link = data.vid_link;
        user.aud_link = data.aud_link;
        user.payment_link = data.payment_link;

        await user.save();

        res.status(200).json({ success: true, user });

    } catch (err) {
        res.status(403).json({ success: false, err: err.message, yay: "Asda" });
        return;
    }
}
