import mongoose from "mongoose";

const ShowStopperSchema = mongoose.Schema({
    name:String,
    clgName:String,
    contact_phone:String,
    aud_link:String,
    vid_link:String
});

const ShowStopper = mongoose.model('ShowStopper', ShowStopperSchema);

export default ShowStopper;
