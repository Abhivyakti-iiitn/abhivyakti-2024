import mongoose from "mongoose";

const BahumukhiSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
    },
    date: {
        type: Date,
        default: Date.now,
    },
    regBy:String,
    regbyEmail:String,
    participantName: String,
    instituteName: String,
    script_link: String,
    vid_link: String,
    payment_link:String
});

const Bahumukhi = mongoose.model('Bahumukhi', BahumukhiSchema);

export default Bahumukhi;
