import express from 'express';
const router = express.Router();
import {getAllBooks, createBook, getBookById, deleteBook} from '../controllers/bookController.js';

router.get('/', getAllBooks);
router.post('/', createBook);
router.get('/:id', getBookById);
router.delete('/:id', deleteBook);

export default router;