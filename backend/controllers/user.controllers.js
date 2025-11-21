import userModel from "../models/user.model";

const getCurrentUser= async (req,res)=>{
    try {
        const user=await userModel.findById(req.userId).select("-password")
        if(!user) return res.status(404).json({
            message:"User is not found"
        })
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            message:`GetCurrent User errror =>${error}`
        })
    }
}



