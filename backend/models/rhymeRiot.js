import mongoose from "mongoose";

const RhymeriotSchema = mongoose.Schema({
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
