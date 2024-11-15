import { setError } from "../middleware/errorHandler.js";

export const dreamCtrl = async (req,res,next) =>{
    try {
        res.status(200).send('My dream is to be expert on <b style="font-size: 20px;">Software Engineering</b> so, i can create helpful projects.');
    } catch (error) {
        next(setError(error.message,error.status))
    }
}