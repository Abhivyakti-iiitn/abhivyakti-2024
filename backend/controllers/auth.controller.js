import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || "Idont69KnowYou";

export const signup = async (req, res, next) => {
    const { username, email, password, phone, college } = req.body;

    // console.log(phone, college)


    try {
        let findUser = await User.findOne({ email: email });
        if (findUser) {

            next(errorHandler(404, 'User Already Exists!'));
            res.status(401).json({ success: false, msg: "User Already Exists" });
            return;

        }
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({ username, email, phone, college, password: hashedPassword, emailToken: crypto.randomBytes(64).toString("hex") });
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
};


export const signin = async (req, res, next) => {


    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });

        // console.log(validUser)
        if (!validUser) {
            next(errorHandler(404, 'User Not Found!'));
            res.status(404).json({ msg: "User Not Found!", success: false });
            return;
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            next(errorHandler(401, 'Wrong Credentials!'));
            res.status(401).json({ msg: "Wrong Credentials!", success: false });
            return;
        }
        const token = jwt.sign({ id: validUser.id }, JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.status(200).json({ rest, access_token: token, success: true });
    }
    catch (error) {
        next(error);
        res.status(500).json({ error, success: false });
    }
};


export const fetchUser = async (req, res, next) => {

    try {

        let access_token = req.headers.access_token;

        const id = jwt.verify(access_token, JWT_SECRET);


        const findUser = await User.findOne({ _id: id.id });

        // console.log(access_token    )


        if (!findUser) {
            next(errorHandler(401, 'Not Found Credentials!'));
            res.status(401).json({ msg: "User Not Found!", success: false });
            return;
        }

        res.status(200).json({ findUser, success: true });
    }
    catch (error) {
        next(error);
        res.status(500).json({ error, success: false });
    }
};

