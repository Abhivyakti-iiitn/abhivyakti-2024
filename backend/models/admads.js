import mongoose from "mongoose";

const AdmadsSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
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
    msg:String,
    payment_id:String,
    order_id:String

});

const Admads = mongoose.model('Admads', AdmadsSchema);

export default Admads;
