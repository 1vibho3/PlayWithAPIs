const express = require ('express');
const app = express();
app.use(express.json());

let books = [];

// use of req.body
app.post('/books', (req, res)=>{

    let book = [];
    req.body.forEach(element => {
        const {id, title, author, genre, publishedYear} = element;

        book = {id: id, title: title, author: author, genre: genre, publishedYear: publishedYear};
        books.push(book);
    });

    res.status(201).json(books);
})

//use of req.query
app.get('/books', (req, res)=>{
    //console.log(books.length);
    const {author, genre} = req.query;
    const list = books.filter((book) => book.author === author && book.genre === genre);

    res.status(200).json(books);
})

//use of req.params
app.get('/books/:id', (req, res)=>{
    const id = req.params.id;
    const book = books.find(book => book.id === id)
    res.status(200).json(book);
})

//use of headers
app.delete('/books/:id', (req, res)=>{
    const authorizationToken = req.headers.authorization;
   console.log(authorizationToken);
    const id = req.params.id
    if(authorizationToken === "secret123"){
        books = books.filter( (book) => book.id !== id);
    }

    res.status(200).send(books);
})

app.listen(8080, () => {
    console.log("connected to port 8080")
})