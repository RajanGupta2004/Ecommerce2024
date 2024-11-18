import User from "../models/User.js"
import jwt from 'jsonwebtoken'



const verifyToken = async (req , res , next)=>{

    const token = req.cookies.accesstoken 
    // console.log(token , "token")

    if(!token){
        return res.status(401).json({
            success: false,
            message: 'No token provided'
        })
    }


    // verify token

    const decodedToken = await jwt.verify(token , "JWT_SECREAT_key" )
    // console.log(decodedToken , 22)

    if(!decodedToken){
        return res.status(401).json({success:false , message:"Token is in valid...."})
    }

    const user = await User.findById(decodedToken._id).select("-password")
    // console.log(user ,29)

    if(!user){
        return res.status(401).json({
            success: false,
            message: 'No token provided'
        })

    }

    req.user = user
    next()
}

export default verifyToken