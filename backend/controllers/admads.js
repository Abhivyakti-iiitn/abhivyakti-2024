import Admads from "../models/admads.js";


export const getadmads = async (req, res) => {
    const docs = await Admads.find({});

    res.json(docs)
}
export const createadmads = async (req, res) => {

    try {

        let user = new Admads();
        let data = req.body.formData;
        let id = req.user.id;
        user.teamName = data.teamName;
        user.clgName = data.clgName;
        user.teamLeadName = data.teamLeadName;
        user.contact_phone = data.contact_phone;
        user.vid_link = data.vid_link;
        user.payment_link = data.payment_link;

        await user.save();

        console.log(req.body)

        res.status(200).json({ success: true, user });

    } catch (err) {
        res.status(403).json({ success: false, err:err.message, yay:"Asda" });
        return
    }




}