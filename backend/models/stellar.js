import mongoose from "mongoose";

const StellarSingOffSchema = mongoose.Schema({
    participantName: String,
    contact_phone: String,
    Email: String,
    instituteName: String,
    instagramID: String,
    yesno: String,
    instrumentsName: String,
    vid_link: String,
    aud_link: String,
});

const StellarSingOff = mongoose.model('StellarSingOff', StellarSingOffSchema);

export default StellarSingOff;
