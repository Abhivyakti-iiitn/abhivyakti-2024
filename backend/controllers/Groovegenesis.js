import GrooveGenesis from "../models/groove.js";

export const getGroovegenesis = async (req,res) =>{
    const docs = await GrooveGenesis.find({});
    
    res.json(docs)
}
export const createGroovegenesis = async (req, res) =>{
    let user = new GrooveGenesis();
    let data=req.body;
    user.participantName = data.participantName;
    user.contact_phone = data.contact_phone;
    user.Email = data.Email;
    user.instituteName = data.instituteName;
    user.instrumentsName = data.instrumentsName;
    user.instagramID = data.instagramID;
    user.yesno = data.yesno;
    user.instrumentsNameBacktrack = data.instrumentsNameBacktrack;
    user.vid_link = data.vid_link;
    user.aud_link = data.aud_link;
    user.payment_link=data.payment_link;
     
    
    await user.save();
    
       
    


}