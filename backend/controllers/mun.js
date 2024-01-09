import Mun from "../models/MUN.js";

export const getmun = async (req,res) =>{
    const docs = await Mun.find({});
    
    res.json(docs)
}
export const createmun = async (req, res) =>{
    let user = new Mun();
    let data=req.body;
    user.contact_phone = data.contact_phone;
    user.teamLeadName = data.teamLeadName;
    user.organizations = data.organizations;
    user.accommodationRequired = data.accommodationRequired;

     
    
    await user.save();
    
       
    


}