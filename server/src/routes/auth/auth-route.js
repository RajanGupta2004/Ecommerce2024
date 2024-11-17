import express from "express";
import userControllers from "../../controllers/auth/auth-controller.js";


const router = express.Router();

router.get("/healthcheck" , (req,res)=>{
    return res.status(200).json({status:"success" , message:"server is running "})
})
router.post("/register", userControllers.userRegistration);

export default router;
