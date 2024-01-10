import mongoose from "mongoose";

const AdmadsSchema = mongoose.Schema({
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
    clgName: String,
    teamLeadName: String,
    contact_phone: String,
    vid_link: String,
    payment_link:String,
});

const Admads = mongoose.model('Admads', AdmadsSchema);

export default Admads;
