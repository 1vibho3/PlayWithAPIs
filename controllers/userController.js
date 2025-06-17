import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export async function createUser(req, res) {
    try{
        const {email, password} = req.body

        let userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: "User already exists. Please sign in"})
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = new User({email: email, password: hashPassword});

        await newUser.save();
        res.status(201).json({message: "User successfully registered"});
    }
    catch (err){
        res.status(500).json({error: err.message});
    }
}

export async function login(req, res) {
    try{
        const {email, password} = req.body

        const userExists = await User.findOne({email});
        console.log(userExists);
        if(!userExists){
                return res.status(401).json({message:"User does not exist. Please register"})
        }

        const passwordMatch = await bcrypt.compare(password, userExists.password)
        if(!passwordMatch){
            return res.status(401).json({message:"Invalid combination of email and password. Try again!"})
        }

        const token = await jwt.sign({id: userExists._id, email: userExists.email}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({token})
    }
    catch (err){
        res.status(500).json({error: err.message})
    }
}