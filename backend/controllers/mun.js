import Mun from "../models/MUN.js";

export const getmun = async (req, res) => {
    const docs = await Mun.find({});
    res.json(docs);
}

export const createmun = async (req, res) => {
    try {
        let user = new Mun();
        let data = req.body;
        let id = req.user.id;

        let entry = await Mun.findOne({ UserId: id });

        if (entry) {
            res.status(401).json({ success: false, msg: "You have Already Registered for this Event" });
            return;
        }

        user.contact_phone = data.contact_phone;
        user.teamLeadName = data.teamLeadName;
        user.organizations = data.organizations;
        user.accommodationRequired = data.accommodationRequired;
        user.payment_link = data.payment_link;

        await user.save();

        res.status(200).json({ success: true, user });

    } catch (err) {
        res.status(403).json({ success: false, err: err.message, yay: "Asda" });
        return;
    }
}
