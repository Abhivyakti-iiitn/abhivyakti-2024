import Express from "express";
import { getPosts, createPosts } from "../controllers/posts.js";

const router = Express.Router();

router.get('/', (req, res) => {
    res.json({ status: 'ok', msg: "welcome to abhvyakti api" });
});
router.post('/create', createPosts);


export default router;
