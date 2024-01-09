import BronxBattleground from "../models/BronxBattleground.js";

export const getBronxBattleground = async (req,res) =>{
    const docs = await BronxBattleground.find({});
    
    res.json(docs)
}
export const createBronxBattleground = async (req, res) =>{
    
    let user = new BronxBattleground();
    let data=req.body;
    user.teamName=data.teamName;
    user.teamLeadName=data.teamLeadName;
    user.leadEmail=data.leadEmail;
    user.contact_phone=data.contact_phone;
    user.aud_link=data.aud_link;
    user.vid_link=data.vid_link;
    user.payment_link=data.payment_link;
    await user.save();
    
    
       
    


}