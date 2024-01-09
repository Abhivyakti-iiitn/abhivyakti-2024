import ShowStopper from "../models/showStopper.js";

export const getShowStopper = async (req,res) =>{
    const docs = await ShowStopper.find({});
    
    res.json(docs)
}
export const createShowStopper = async (req, res) =>{
    let user = new ShowStopper();
    let data=req.body;
    user.name=data.name;
    user.clgName=data.clgName;
    user.contact_phone=data.contact_phone;
    user.aud_link=data.aud_link;
    user.vid_link=data.vid_link;
    user.payment_link=data.payment_link;
    
    await user.save();
    
       
    


}