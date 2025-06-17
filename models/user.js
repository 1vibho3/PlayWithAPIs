import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    role: {
        type: String,
        enum:["admin", "user"],
        default:"user"
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type:String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)
export default User