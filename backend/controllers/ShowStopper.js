import ShowStopper from "../models/showStopper.js";

export const getShowStopper = async (req, res) => {
    const docs = await ShowStopper.find({});
    res.json(docs);
}

export const createShowStopper = async (req, res) => {
    try {
        let user = new ShowStopper();
        let data = req.body.formData;
        let id = req.user.id;

        let entry = await ShowStopper.findOne({ userId: id });

        if (entry) {
            res.status(401).json({ success: false, msg: "You have Already Registered for this Event" });
            return;
        }

        user.userId = id;
        user.regBy = req.body.regBy;
        user.regbyEmail = req.body.regbyEmail;
        user.name = data.name;
        user.clgName = data.clgName;
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

export const checkRegistration = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming you have middleware to extract user ID from the request

        // Check if the user is already registered for the event
        const existingRegistration = await ShowStopper.findOne({ userId });

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
