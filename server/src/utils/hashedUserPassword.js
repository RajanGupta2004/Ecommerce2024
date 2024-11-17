
import bcrypt from "bcrypt"


export const encryptUserPassword = async (password)=>{
    try {

        const salt =10

        const hashedPassword = await bcrypt.hash(password , salt)
        return hashedPassword
        
    } catch (error) {
        console.log("Error in password encryption")
        
    }
}