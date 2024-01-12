import mongoose from "mongoose";

const ShowStopperSchema = mongoose.Schema({
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
    name:String,
    clgName:String,
    contact_phone:String,
    aud_link:String,
    vid_link:String,
    payment_link:String,
    msg:String,
    payment_id:String,
    order_id:String
});

const ShowStopper = mongoose.model('ShowStopper', ShowStopperSchema);

export default ShowStopper;
