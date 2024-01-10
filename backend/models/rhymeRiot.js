import mongoose from "mongoose";

const RhymeriotSchema = mongoose.Schema({
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
    bandName: String,
    leaderName: String,
    contact_phone: String,
    leaderEmail: String,
    instituteName: String,
    yesno: String,
    instrumentsName: String,
    vid_link: String,
    aud_link: String,
    payment_link:String
});

const Rhymeriot = mongoose.model('Rhymeriot', RhymeriotSchema);

export default Rhymeriot;
