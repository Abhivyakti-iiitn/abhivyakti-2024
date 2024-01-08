import Express from "express";
import { getPosts, createPosts } from "../controllers/posts.js";
import {signin,signup} from "../controllers/auth.controller.js";  


const router = Express.Router();

router.get('/', (req, res) => {
    res.json({ status: 'ok', msg: "welcome to abhvyakti api" });
});
router.post('/create', createPosts);
router.post('/sign-in',signin);
router.post('/sign-up',signup);



export default router;
