import mongoose from "mongoose";

const AndhkaarSchema = mongoose.Schema({
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
    instituteName: String,
    vid_link: String,
    script_link: String,
    payment_link:String
});

const Andhkaar = mongoose.model('Andhkaar', AndhkaarSchema);

export default Andhkaar;
