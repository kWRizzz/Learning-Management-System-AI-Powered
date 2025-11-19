import userModel from "../models/user.model";

const getCurrentUser= async (req,res)=>{
    try {
        const user=await userModel.findById(req.userId).select("-password")
    } catch (error) {
        
    }
}



