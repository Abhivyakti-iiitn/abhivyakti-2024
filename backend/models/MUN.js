import mongoose from "mongoose";

const MunSchema = mongoose.Schema({
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
    contact_phone: String,
    teamLeadName: String,
    organizations: String,
    accommodationRequired: String,
    payment_link:String
});

const Mun = mongoose.model('Mun', MunSchema);

export default Mun;
