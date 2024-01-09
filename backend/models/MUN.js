import mongoose from "mongoose";

const MunSchema = mongoose.Schema({
    contact_phone: String,
    teamLeadName: String,
    organizations: String,
    accommodationRequired: String,
    payment_link:String
});

const Mun = mongoose.model('Mun', MunSchema);

export default Mun;
