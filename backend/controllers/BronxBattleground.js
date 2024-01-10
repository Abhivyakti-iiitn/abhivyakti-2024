import BronxBattleground from "../models/BronxBattleground.js";

export const getBronxBattleground = async (req, res) => {
    const docs = await BronxBattleground.find({});
    res.json(docs);
}

export const createBronxBattleground = async (req, res) => {
    try {
        let user = new BronxBattleground();
        let data = req.body.formData;
        let id = req.user.id;

        let entry = await BronxBattleground.findOne({ userId: id });

        if (entry) {
            res.status(401).json({ success: false, msg: "You have Already Registered for this Event" });
            return;
        }

        user.userId = id;
        user.regBy = req.regBy;
        user.regbyEmail = req.reqbyEmail;
        user.teamName = data.teamName;
        user.teamLeadName = data.teamLeadName;
        user.leadEmail = data.leadEmail;
        user.contact_phone = data.contact_phone;
        user.aud_link = data.aud_link;
        user.vid_link = data.vid_link;
        user.payment_link = data.payment_link;

        await user.save();

        res.status(200).json({ success: true, user });

    } catch (err) {
        res.status(403).json({ success: false, err: err.message, yay: "Asda" });
        return;
    }
}
