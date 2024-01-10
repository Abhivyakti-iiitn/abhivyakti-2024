import mongoose from "mongoose";

const RythmRumbleSchema = mongoose.Schema({
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
    teamName: String,
    teamLeadName: String,
    leadEmail: String,
    contact_phone: String,
    clgName: String,
    aud_link: String,
    vid_link: String,
    payment_link:String
});

const RythmRumble = mongoose.model('RythmRumble', RythmRumbleSchema);

export default RythmRumble;
