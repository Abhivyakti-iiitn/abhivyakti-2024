import mongoose from "mongoose";

const BronxBattlegroundSchema = mongoose.Schema({
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
    teamName: String,
    teamLeadName: String,
    leadEmail: String,
    contact_phone: String,
    aud_link: String,
    vid_link: String,
    payment_link:String
});

const BronxBattleground = mongoose.model('BronxBattleground', BronxBattlegroundSchema);

export default BronxBattleground;
