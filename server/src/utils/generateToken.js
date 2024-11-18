
import jwt from "jsonwebtoken"

const GenerateToken = async (user)=>{

    const payload = {
        _id:user._id,
        email:user.email
    }
   // access token
    const accessToken = await jwt.sign(payload , "JWT_SECREAT_key" ,{expiresIn:"1d"})

    // refresh token
    const refreshToken = await jwt.sign(payload , "JWT_REGRESH_KEY" , {expiresIn:"10d"})

    return Promise.resolve({accessToken , refreshToken})

}

export default GenerateToken