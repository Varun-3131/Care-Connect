import validator from "validator"
import bycrpt from "bcrypt";
import {v2 as cloudinary} from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";

const addDoctor = async (req, res) => {

    try {

        const {name, email, password, speciality, degree, experience, about, fees, address} = req.body
        const imageFile = req.file

        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.status(400).json({message: "Please fill out the fields"})
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({message: "Please fill valid email"})
        }

        if (password.length < 6) {
            return res.status(400).json({message: "Please enter at least 6 characters"})
        }

        const salt = await bycrpt.genSalt(10)
        const hashPassword = await bycrpt.hash(password, salt)

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
        const imageUrl = imageUpload.secure_url


        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success: true, message: "Successfully created"})

    } catch (error) {

        console.log(error)
        res.status(400).json({message: error.message})

    }
}

const loginAdmin = async (req, res) => {
    try {

        const {email,password} =req.body

        if(email===process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }else{
            res.status(400).json({message: "Invalid Credentials"})
        }

    } catch (error) {

        console.log(error)
        res.status(400).json({message: error.message})

    }
}

export {addDoctor ,loginAdmin}