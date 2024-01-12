import Praanant from "../models/Praanant.js";

export const getPraanant = async (req, res) => {
    const docs = await Praanaant.find({});
    res.json(docs);
}

export const createPraanant = async (req, res) => {
    try {
        let user = new Praanant();
        let data = req.body.formData;
        let id = req.user.id;

        let entry = await Praanant.findOne({ userId: id });

        if (entry) {
            res.status(401).json({ success: false, msg: "You have Already Registered for this Event" });
            return;
        }

        console.log(req)

        user.userId = id;
        user.regBy = req.body.regBy;
        user.regbyEmail = req.body.regbyEmail;
        user.teamName = data.teamName;
        user.teamLeadName = data.teamLeadName;
        user.instituteName = data.instituteName;
        user.script_link = data.script_link;
        user.vid_link = data.vid_link;
        user.payment_link = data.payment_link;
        user.msg = data.msg;
        user.payment_id = data.payment_id;
        user.order_id = data.order_id;

        await user.save();

        res.status(200).json({ success: true, user });

    } catch (err) {
        res.status(403).json({ success: false, err: err.message, yay: "Asda" });
        return;
    }
}

export const checkRegistration = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming you have middleware to extract user ID from the request

        // Check if the user is already registered for the event
        const existingRegistration = await Praanant.findOne({ userId });

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
