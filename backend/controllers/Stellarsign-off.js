import StellarSingOff from "../models/stellar.js";

export const getStellarsignoff= async (req,res) =>{
    const docs = await StellarSingOff.find({});
    
    res.json(docs)
}
export const createStellarsignoff = async (req, res) =>{
    let user = new StellarSingOff();
    let data=req.body;
    user.participantName = data.participantName;
    user.contact_phone = data.contact_phone;
    user.Email = data.Email;
    user.instituteName = data.instituteName;
    user.instagramID = data.instagramID;
    user.yesno = data.yesno;
    user.instrumentsName = data.instrumentsName;
    user.vid_link = data.vid_link;
    user.aud_link = data.aud_link;

     
    
    await user.save();
    
       
    


}