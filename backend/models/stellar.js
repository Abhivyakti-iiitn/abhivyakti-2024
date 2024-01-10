import mongoose from "mongoose";

const StellarSingOffSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    date: {
        type: Date,
        default: Date.now,
    },
    regBy:String,
    regbyEmail:String,
    participantName: String,
    contact_phone: String,
    Email: String,
    instituteName: String,
    instagramID: String,
    yesno: String,
    instrumentsName: String,
    vid_link: String,
    aud_link: String,
    payment_link:String
});

const StellarSingOff = mongoose.model('StellarSingOff', StellarSingOffSchema);

export default StellarSingOff;
