import express from 'express';
import ConnectDB from './config/db.js';
import bookRoutes from './routes/bookRoute.js';
import authRoutes from './routes/authRoute.js';
import adminRoutes from './routes/adminRoute.js';
import 'dotenv/config.js'

const app = express();
app.use(express.json());

app.use('/books', bookRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
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
