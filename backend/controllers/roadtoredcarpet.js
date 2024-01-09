import Roadtoredcarpet from "../models/roadtoredcarpet.js";

export const getroadtoredcarpet = async (req,res) =>{
    const docs = await Roadtoredcarpet.find({});
    console.log("hii get");
    res.json(docs)
}
export const createroadtoredcarpet = async (req, res) =>{
    let user = new Roadtoredcarpet();
    let data=req.body;
    user.teamName = data.teamName;
    user.clgName = data.clgName;
    user.teamLeadName = data.teamLeadName;
    user.contact_phone = data.contact_phone;
    user.vid_link = data.vid_link;
    user.payment_link=data.payment_link;
     
    
    await user.save();
    console.log("hi post");
       
    


}