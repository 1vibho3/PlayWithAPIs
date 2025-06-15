import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: {
        type: String,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    author: {
        type: String,
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