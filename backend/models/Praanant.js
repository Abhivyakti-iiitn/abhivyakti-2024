import mongoose from "mongoose";

const PraanantSchema = mongoose.Schema({
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
    instituteName: String,
    script_link: String,
    vid_link: String,
    payment_link:String
});

const Praanant = mongoose.model('Praanant', PraanantSchema);

export default Praanant;
