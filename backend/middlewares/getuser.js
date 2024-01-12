import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "Idont69KnowYou";

export const GetUser = (req, res, next) => {
    const AuthToken = req.header('access_token');
    if (!AuthToken) {
        res.status(401).send({success:"false", msg: "Authentication failed : Invalid User!" });
    }
    try {
        let data = jwt.verify(AuthToken, JWT_SECRET);
        data = {id: data}
        req.user = data.id;
        next();

    } catch (error) {
        res.status(401).send({success:false, msg: "Authentication failed : Token Expired!", error: error.message });
    }

}
