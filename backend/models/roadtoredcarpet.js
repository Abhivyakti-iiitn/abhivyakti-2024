import mongoose from "mongoose";

const RoadtoredcarpetSchema = mongoose.Schema({
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
    payment_link:String
});

const Roadtoredcarpet = mongoose.model('Roadtoredcarpet', RoadtoredcarpetSchema);

export default Roadtoredcarpet;
