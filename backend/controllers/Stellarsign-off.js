import StellarSingOff from "../models/stellar.js";

export const getStellarsignoff = async (req, res) => {
    const docs = await StellarSingOff.find({});
    res.json(docs);
}

export const createStellarsignoff = async (req, res) => {
    try {
        let user = new StellarSingOff();
        let data = req.body;
        let id = req.user.id;

        let entry = await StellarSingOff.findOne({ UserId: id });

        if (entry) {
            res.status(401).json({ success: false, msg: "You have Already Registered for this Event" });
            return;
        }

        user.participantName = data.participantName;
        user.contact_phone = data.contact_phone;
        user.Email = data.Email;
        user.instituteName = data.instituteName;
        user.instagramID = data.instagramID;
        user.yesno = data.yesno;
        user.instrumentsName = data.instrumentsName;
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
