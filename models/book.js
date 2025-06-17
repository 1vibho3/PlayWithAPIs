import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    
    title: {
        type: String,
        required:true,
        unique: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    genre: {
        type: String,
        required:true
    },
    publishedYear: {
        type: String,
        required:true
    },
})

const Book = mongoose.model('Book', bookSchema)
export default Book;