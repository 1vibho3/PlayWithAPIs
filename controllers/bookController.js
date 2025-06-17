import Book from '../models/book.js';

//Create Book

export async function createBook(req, res) {
    
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

//Read

export async function getAllBooks(req, res) {
    try{
        const {author, genre} = req.query;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const total = await Book.countDocuments();

        const startIndex = (page-1)*limit;

        const list = await Book.find({author: author, genre: genre}).skip(startIndex).limit(limit);
        console.log(list);
        res.status(200).json({
            page,
            limit,
            total,
            pages: Math.ceil(total/limit),
            list});
    } 
    catch (err){
        res.status(500).json({message: "Could not get books"});
    }
    
}

//Read by Title

export async function getBookByTitle(req, res) {
    try{
        const title = req.params.title;
        const book = await Book.findOne({title: title})
        res.status(200).json(book);
    }
    catch (err){
        res.status(500).json({message: "Could not get book"});
    }
   
}

//Update

export async function updateBookByTitle(req, res) {
    try{
        const title = req.params.title;
        const year = req.body.year;
        const book = await Book.findOneAndUpdate({title: title}, {publishedYear: year}, {new: true})
        res.status(202).json(book);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//Delete

export async function deleteBook(req, res)  {
    
    try{
        // console.log(req);
        const title = req.params.title;
        const count = await Book.countDocuments();
        // console.log(count);
        if(count === 0)
            throw new Error("Collection Empty")
        
            await Book.deleteMany({title: title})
            res.status(200).json({message: "Successfully deleted"});
        
    }
    catch (err){
        console.log(err.message);
        res.status(500).json({error: "Deletion Failed"})
    }
   
}


