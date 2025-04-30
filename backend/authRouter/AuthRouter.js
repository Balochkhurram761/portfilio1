import sendmail from "../authController/AuthController.js";
import express from 'express'


const router=express.Router();


router.post("/send" , sendmail)

export default router