import mongoose from "mongoose";

const BahumukhiSchema = mongoose.Schema({
    participantName: String,
    instituteName: String,
    script_link: String,
    vid_link: String
});

const Bahumukhi = mongoose.model('Bahumukhi', BahumukhiSchema);

export default Bahumukhi;
