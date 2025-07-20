import express from "express";
import {addDoctor} from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";

const adminRouter = express.Router();

adminRouter.post('/add-Doctor',upload.single('image'),addDoctor)

export default adminRouter;


