const express = require('express');

const app = express();
app.use(express.json());

app.get('/todos', (req, res) => {
    const status = {
        "status" : "running"
    }
    res.send(status);
})

app.post('/todos', (req, res)=>{
    res.send("Hello world");
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