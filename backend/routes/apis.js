import Express from "express";
import { getPosts, createPosts } from "../controllers/posts.js";
import {signin,signup, fetchUser} from "../controllers/auth.controller.js";  


const router = Express.Router();

router.get('/', (req, res) => {
    res.json({ status: 'ok', msg: "welcome to abhvyakti api" });
});
router.get('/fetch-user', fetchUser);
router.post('/sign-in',signin);
router.post('/sign-up',signup);



export default router;
