import Rhymeriot from "../models/Rhymeriot.js";

export const getRhymeriot = async (req,res) =>{
    const docs = await Rhymeriot.find({});
    
    res.json(docs)
}
export const createRhymeriot = async (req, res) =>{
    let user = new Rhymeriot();
    let data=req.body;
    user.bandname = data.bandName;
    user.leaderName = data.leaderName;
    user.contact_phone = data.contact_phone;
    user.leaderEmail = data.leaderEmail;
    user.aud_link = data.aud_link;
    user.vid_link = data.vid_link;
    user.instituteName=data.instituteName;
    user.yesno=data.yesno;
    user.instrumentsName=data.instrumentsName;
    user.payment_link=data.payment_link;
     
    
    await user.save();
    
       
    


}