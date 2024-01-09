import mongoose from "mongoose";

const AdmadsSchema = mongoose.Schema({
    teamName: String,
    clgName: String,
    teamLeadName: String,
    contact_phone: String,
    vid_link: String,
    payment_link:String
});

const Admads = mongoose.model('Admads', AdmadsSchema);

export default Admads;
