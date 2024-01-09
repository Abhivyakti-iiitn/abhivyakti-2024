import RythmRumble from "../models/rythmRumble.js";

export const getrythmrumble = async (req,res) =>{
    const docs = await RythmRumble.find({});
    console.log("hii get");
    res.json(docs)
}
export const createrythmrumble = async (req, res) =>{
    let user = new RythmRumble();
    let data=req.body;
    user.teamName = data.teamName;
    user.teamLeadName = data.teamLeadName;
    user.leadEmail = data.leadEmail;
    user.contact_phone = data.contact_phone;
    user.clgName = data.clgName;
    user.aud_link = data.aud_link;
    user.vid_link = data.vid_link;


     
    
    await user.save();
    console.log("hi post");
       
    


}