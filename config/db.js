import mongoose from 'mongoose';

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    }
    catch (err){
        console.log("DB Connection failed: ", err.message)
        process.exit(1)
    }
}

export default connectDB;