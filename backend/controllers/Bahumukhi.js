import Bahumukhi from "../models/bahumukhi.js";

export const getBahumukhi = async (req,res) =>{
    const docs = await Bahumukhi.find({});
    
    res.json(docs)
}
export const createBahumukhi = async (req, res) =>{
    let user = new Bahumukhi();
    let data=req.body;
    user.participantName = data.participantName;
    user.instituteName = data.instituteName;
    user.script_link = data.script_link;
    user.vid_link = data.vid_link;
    user.payment_link=data.payment_link;
     
    
    await user.save();
    
       
    


}