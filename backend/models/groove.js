import mongoose from "mongoose";

const GrooveGenesisSchema = mongoose.Schema({
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
    contact_phone: String,
    Email: String,
    instituteName: String,
    instrumentsName: String,
    instagramID: String,
    yesno: String,
    instrumentsNameBacktrack: String,
    vid_link: String,
    aud_link: String,
    payment_link:{
        type:String,
        required : true
    }
});

const GrooveGenesis = mongoose.model('GrooveGenesis', GrooveGenesisSchema);

export default GrooveGenesis;
