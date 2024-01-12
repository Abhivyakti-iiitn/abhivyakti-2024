import Roadtoredcarpet from "../models/roadtoredcarpet.js";

export const getroadtoredcarpet = async (req, res) => {
    const docs = await Roadtoredcarpet.find({});
    console.log("hii get");
    res.json(docs);
}

export const createroadtoredcarpet = async (req, res) => {
    try {
        let user = new Roadtoredcarpet();
        let data = req.body.formData;
        let id = req.user.id;

        let entry = await Roadtoredcarpet.findOne({ userId: id });

        if (entry) {
            res.status(401).json({ success: false, msg: "You have Already Registered for this Event" });
            return;
        }

        user.userId = id;
        user.regBy = req.body.regBy;
        user.regbyEmail = req.body.regbyEmail;
        user.teamName = data.teamName;
        user.clgName = data.clgName;
        user.teamLeadName = data.teamLeadName;
        user.contact_phone = data.contact_phone;
        user.vid_link = data.vid_link;
        user.payment_link = data.payment_link;
        user.msg = data.msg;
        user.payment_id = data.payment_id;
        user.order_id = data.order_id;

        await user.save();
        console.log("hi post");

        res.status(200).json({ success: true, user });

    } catch (err) {
        res.status(403).json({ success: false, err: err.message, yay: "Asda" });
        return;
    }
}
export const checkRegistration = async (req, res) => {
    try {
        const userId = req.user.id;
        const existingRegistration = await Roadtoredcarpet.findOne({ userId });

        if (existingRegistration) {
            return res.status(200).json({ success: true, message: "User is already registered for Admads" });
        } else {
            return res.status(200).json({ success: false, message: "User is not registered for Admads" });
        }
    } catch (error) {
        console.error("Error checking registration:", error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};