const express = require('express');
const ConnectDB = require('./config/db.js');
const bookRoutes = require('./routes/bookRoute.js');
require('dotenv').config()

const app = express();
app.use(express.json());

app.use('/books', bookRoutes);
ConnectDB();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    
   // ConnectDB.getCollectionNames();
    console.log("server is listening on port 8000");
})













// app.get('/todos/', (req, res) => {
//     res.send(todos);  
// })

// app.post('/todos', (req, res)=>{
//     const todo = {id: 1, item: req.body.text}
//     todos.push(todo);
//     res.send("Todos Updated");
// })

// app.put('/todos/:id', (req, res)=>{
//     res.send("This is put request");
// })

// app.delete('/todos/:id', (req, res)=>{
//     res.send("this is delete request")
// })
