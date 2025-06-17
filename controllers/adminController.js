import User from '../models/user.js';

export async function deleteUser(req, res) {
    try{
        const email = req.body.email;
        let userExists = await User.findOne({email});
        if(!userExists){
            return res.status(400).json({message: "User does not exist"})
        }

        await User.deleteOne({email});
        res.status(200).json({message: "User successfully deleted"})
    }
    catch (err){
        res.status(500).json({error: err.message})
    }
}