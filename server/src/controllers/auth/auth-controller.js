import User from "../../models/User.js";
import GenerateToken from "../../utils/generateToken.js";
import { encryptUserPassword } from "../../utils/hashedUserPassword.js";
import bcrypt from 'bcrypt'


class userControllers {


  static userRegistration = async (req, res) => {
    try {

        const {userName , email , password} = req.body 
        
        if(!userName || !email || !password){
            return res.status(400).json({ success: false , message:"All field are required.."})
        }

         // Check if user already exists
         const existingUser = await User.findOne({ email }); 
         if (existingUser) {
           return res.status(409).json({
            success: false,
             message: "User already exists.",
           });
         }

        if(existingUser){
            return res.status(409).json({ success: false , message:"user already exist..."})
        }

        // encrypt the user password

       const hashedPassword =  await encryptUserPassword(password)
        

       // create  user
       const newUser = await User.create({userName , email , password:hashedPassword})

       if(!newUser){
        return res.status(500).json({ success: false , message:"internal server error"})
       }

       return res.status(200).json({ success: true ,message:"User created successfully..."})
    

    } catch (error) {
      console.log("ERROR in registrattion" , error);
    }
  };

  static userLogin = async (req ,res)=>{
    try {

      const {email , password} = req.body
      if(!email || !password){
        return res.status(409).json({status:"failed" , message:"All field required..."})
      }

      // check user
      const existingUser = await User.findOne({email})
      console.log("existingUser" , existingUser)

      if(!existingUser){
       return res.status(409).json({status:"failed" , message:"User not found..."})
      }

      // compare password
      const comparePassword = await bcrypt.compare(password , existingUser.password)
      if(!comparePassword){
        return res.status(401).json({status:"failed" , message:"Password does not match..."})
      }


      // generate jwt token

      const {accessToken ,refreshToken} = await GenerateToken(existingUser)
      // console.log(accessToken , refreshToken)
      const option = {
        httpOnly:true,
        secure:true
      }



      const loggedInUser = await User.findById({_id:existingUser._id}).select("-password")

      if (!loggedInUser) {
        return res.status(500).json({
            success: false,
            message: "Something went wronge..."
        })
    }

      return res.status(200).cookie("accesstoken" ,accessToken , option).json({
        success:true,
        message:"login successfulll....",
        accessToken:accessToken,
        user:loggedInUser
      })


        
    } catch (error) {
        console.log("Error in login" , error)
        
    }
  }


  static logoutUser  = async(req , res)=>{
    try {

      return res.status(200)
      .clearCookie("accessToken")
      .json({
          success: true,
          message: "User logged out"
      })
      
    } catch (error) {
      console.log("ERROR in logout" , error)
      
    }

  }
}



export default userControllers
