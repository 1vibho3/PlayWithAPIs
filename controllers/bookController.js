let books = require('../data/books.js');
const Book = require('../models/book.js');

exports.getAllBooks = async (req, res) =>{
    try{
        const {author, genre} = req.query;
        const list = await Book.find({author: author, genre: genre});
        console.log(list);
        res.status(200).json(list);
    } 
    catch (err){
        res.status(500).json({message: "Could not get books"});
    }
    
}

exports.createBook = async (req, res) => {
    
    const savedBooks = []
    try{
        for (const element of req.body)  {
            const {id, title, author, genre, publishedYear} = element;
            const book = new Book({id: id, title: title, author: author, genre: genre, publishedYear: publishedYear});
            const saved = await book.save();
            savedBooks.push(saved);
        }

        res.status(201).json(savedBooks);
    }
    catch (err){
        console.log(err.message);
        res.status(500).json({error: "Failed to create books"});
    }

   
}

exports.getBookById = async (req, res) => {
    try{
        const id = req.params.id;
        console.log(id);
        const book = await Book.findOne({id: id})
        res.status(200).json(book);
    }
    catch (err){
        res.status(500).json({message: "Could not get book"});
    }
   
}

exports.deleteBook = async (req, res) => {
    const authorizationToken = req.headers.authorization;
    
    if(authorizationToken !== "secret123"){
        res.status(401).json({error: "Unauthorized"})
    }

    const id = req.params.id;
    try{
        const count = await Book.countDocuments();
        console.log(count);
        if(count === 0)
            throw new Error("Collection Empty")
        
            await Book.deleteMany({id: id})
            res.status(200).json({message: "Successfully deleted"});
        
    }
    catch (err){
        console.log(err.message);
        res.status(500).json({error: "Deletion Failed"})
    }
   
}


