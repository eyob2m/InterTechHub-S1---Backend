import { setError } from "../middleware/errorHandler.js";

export const nameCtrl = async (req,res,next) =>{
    try {
        res.status(200).send('My name is <b style="font-size: 20px;">Eyob Betemariam.</b> You can call me yuti');
    } catch (error) {
        next(setError(error.message,error.status))
    }
}