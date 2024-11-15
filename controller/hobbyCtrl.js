import { setError } from "../middleware/errorHandler.js";

export const hobbyCtrl = async (req,res,next) =>{
    try {
        res.status(200).json({hobby: "I draw a lot. Other than that i like listening Mezmur. "});
    } catch (error) {
        next(setError(error.message,error.status)) 
    }
}