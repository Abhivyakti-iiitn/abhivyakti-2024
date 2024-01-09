import mongoose from "mongoose";

const RoadtoredcarpetSchema = mongoose.Schema({
    teamName: String,
    clgName: String,
    teamLeadName: String,
    contact_phone: String,
    vid_link: String,
    payment_link:String
});

const Roadtoredcarpet = mongoose.model('Roadtoredcarpet', RoadtoredcarpetSchema);

export default Roadtoredcarpet;
