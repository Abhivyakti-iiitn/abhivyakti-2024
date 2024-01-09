import mongoose from "mongoose";

const RythmRumbleSchema = mongoose.Schema({
    teamName: String,
    teamLeadName: String,
    leadEmail: String,
    contact_phone: String,
    clgName: String,
    aud_link: String,
    vid_link: String
});

const RythmRumble = mongoose.model('RythmRumble', RythmRumbleSchema);

export default RythmRumble;
