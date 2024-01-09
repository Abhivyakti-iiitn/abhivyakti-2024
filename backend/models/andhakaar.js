import mongoose from "mongoose";

const AndhkaarSchema = mongoose.Schema({
    teamName: String,
    teamLeadName: String,
    instituteName: String,
    vid_link: String,
    script_link: String
});

const Andhkaar = mongoose.model('Andhkaar', AndhkaarSchema);

export default Andhkaar;
