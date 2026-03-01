import userModel from "../models/userModels.js";
import JWT from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import validator from 'validator'

//login user
const loginUser = async(req, res) => {

}

// register new user
const registerUser = async (req, res) =>  {
    const {name, password, email} = req.body;
    try {
        //is user already exist.
        const exist = await userModel.findOne({email});
        if (exist) {
            return res.json({success:false, message: "User already exists."})
        }
    } catch (error) {
        
    }
    
}

export {loginUser, registerUser};