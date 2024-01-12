// import PostMessage from "../models/posts.js";

// export const getPosts = async (req,res) =>{
//     try{
//         const postmessages = await PostMessage.find();
//         console.log("getpspd");
//         res.status(200).json(postmessages);
//     }catch(error) {
//         res.status(404).json({message:error.message});
//     }
// }
// export const createPosts = async (req, res) =>{
//     const post = req.body;
//     // console.log(post)
//     const newPost = new PostMessage(post);
//     try{
//         await newPost.save();
//         // console.log(asda);
//         console.log("pspd");
//         res.status(201).json(newPost);
//     }catch(error){
//         res.status(409).json({message:error.message, req:post});
//         // console.log("fasfaw");
//     }


// }