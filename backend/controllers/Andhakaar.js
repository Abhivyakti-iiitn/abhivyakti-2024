import Andhkaar from "../models/andhakaar.js";

export const getAndhakaar = async (req,res) =>{
    const docs = await Andhkaar.find({});
    
    res.json(docs)
}
export const createAndhakaar= async (req, res) =>{
    let user = new Andhkaar();
    let data=req.body;
    user.teamName = data.teamName;
    user.teamLeadName = data.teamLeadName;
    user.instituteName = data.instituteName;
    user.vid_link = data.vid_link;
    user.script_link = data.script_link;
    user.payment_link=data.payment_link;
     
    
    await user.save();
    
       
    


}