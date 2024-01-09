import Praanaant from "../models/Praanant.js";

export const getPraanant = async (req,res) =>{
    const docs = await Praanaant.find({});
    ;
    res.json(docs)
}
export const createPraanant = async (req, res) =>{
    let user = new Praanaant();
    let data=req.body;
    user.teamName=data.teamName,
    user.teamLeadName= data.teamLeadName,
    user.instituteName= data.instituteName,
    user.script_link= data.script_link,
    user.vid_link=data.vid_link;
     
    
    await user.save();
   
       
    


}