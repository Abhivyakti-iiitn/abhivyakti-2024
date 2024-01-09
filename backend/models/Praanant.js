import mongoose from "mongoose";

const PraanantSchema = mongoose.Schema({
    teamName: String,
    teamLeadName: String,
    instituteName: String,
    script_link: String,
    vid_link: String
});

const Praanant = mongoose.model('Praanant', PraanantSchema);

export default Praanant;
