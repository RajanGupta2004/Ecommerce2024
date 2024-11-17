import User from "../../models/User.js";
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


      return res.status(200).json({status:"success" , message:"login successfull..."})
        
    } catch (error) {
        console.log("Error in login" , error)
        
    }
  }
}



export default userControllers
