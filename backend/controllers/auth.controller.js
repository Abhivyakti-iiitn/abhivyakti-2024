import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || "Idont69KnowYou";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;


    try {
        const findUser = User.findOne({ email });
        console.log(findUser.name)
        // if (findUser) return next(errorHandler(404, 'User Already Exists!'));
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, emailToken: crypto.randomBytes(64).toString("hex") });
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (err) {
        next(err);
    }
};


export const signin = async (req, res, next) => {


    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });

        console.log(validUser)
        if (!validUser) return next(errorHandler(404, 'User Not Found!'));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong Credentials!'));
        const token = jwt.sign({ id: validUser.id }, JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.status(200).json({ rest, access_token: token });
    }
    catch (error) {
        next(error);
    }
};