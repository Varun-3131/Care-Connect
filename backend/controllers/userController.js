import validator from "validator";
import bycrpt from "bcrypt";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {

    try {
        const [name, email, password] = req.body;

        if (!name || !password || !email) {
            return res.json({success: false, message: "Please enter valid credentials."});
        }

        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter valid email."});
        }

        if (password.length < 5) {
            return res.json({success: false, message: "Password must be at least 5 characters."});
        }

        const salt = await bycrpt.genSalt(10)
        const hashedPassword = await bycrpt.hash(password, salt)

        const userData = {
            name,
            email,
            hashedPassword,
        }

        const newUser = new userModel(userData)
        const user = await newUser.save();

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.json({success: true, token})

    } catch (err) {
        console.log(err);
        return res.json({success: false, message: "Something went wrong."});
    }

}

const loginUser = async (req, res) => {

    try {

        const {email, password} = req.body;
        const user = await userModel.findOne({email})

        if (!user) {
            return res.json({success: false, message: "Invalid Credentials."});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
            res.json({success: true, token})
        } else {
            return res.json({success: false, message: "Invalid Credentials."});
        }

    } catch (err) {
        console.log(err);
        return res.json({success: false, message: err.message});
    }

}

const getProfile = async (req, res) => {

    try{

        const {userId} = req.body;
        const userData= await userModel.findById(userId).select('-password');

        res.json({success: true, userData})

    }
    catch(err){

        console.log(err);
        return res.json({success: false, message: "Something went wrong."});

    }

}



export {registerUser, loginUser,getProfile};