import User from "../../models/User.js";
import { encryptUserPassword } from "../../utils/hashedUserPassword.js";


class userControllers {
  static userRegistration = async (req, res) => {
    try {

        const {userName , email , password} = req.body 
        
        if(!userName || !email || !password){
            return res.status(400).json({status:"failed" , message:"All field are required.."})
        }

         // Check if user already exists
         const existingUser = await User.findOne({ email }); 
         if (existingUser) {
           return res.status(409).json({
             status: "failed",
             message: "User already exists.",
           });
         }

        if(existingUser){
            return res.status(409).json({status:"failed" , message:"user already exist..."})
        }

        // encrypt the user password

       const hashedPassword =  await encryptUserPassword(password)
        

       // create  user
       const newUser = await User.create({userName , email , password:hashedPassword})

       if(!newUser){
        return res.status(500).json({status:"failed" , message:"internal server error"})
       }

       return res.status(200).json({status:"success" , message:"User created successfully..."})
    

    } catch (error) {
      console.log("ERROR in registrattion" , error);
    }
  };
}



export default userControllers
