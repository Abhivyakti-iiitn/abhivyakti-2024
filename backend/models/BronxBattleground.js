import mongoose from "mongoose";

const BronxBattlegroundSchema = mongoose.Schema({
    teamName: String,
    teamLeadName: String,
    leadEmail: String,
    contact_phone: String,
    aud_link: String,
    vid_link: String
});

const BronxBattleground = mongoose.model('BronxBattleground', BronxBattlegroundSchema);

export default BronxBattleground;
