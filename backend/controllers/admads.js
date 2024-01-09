import Admads from "../models/admads.js";

export const getadmads = async (req,res) =>{
    const docs = await Admads.find({});
    
    res.json(docs)
}
export const createadmads = async (req, res) =>{
    let user = new Admads();
    let data=req.body;
    user.teamName = data.teamName;
    user.clgName = data.clgName;
    user.teamLeadName = data.teamLeadName;
    user.contact_phone = data.contact_phone;
    user.vid_link = data.vid_link;

     
    
    await user.save();
    
       
    


}