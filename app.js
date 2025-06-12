const express = require('express');
const app = express();
app.use(express.json());

const todos = [];

app.get('/todos/', (req, res) => {
    res.status(201).send(todos);  
})

app.post('/todos', (req, res)=>{
    const todo = {id: 1, item: req.body.text}
    todos.push(todo);
    res.send("Todos Updated");
})

app.put('/todos/:id', (req, res)=>{
    res.send("This is put request");
})

app.delete('/todos/:id', (req, res)=>{
    res.send("this is delete request")
})

app.listen(8000, () => {
    console.log("server is listening on port 8000");
})