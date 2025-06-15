import express from 'express';
const router = express.Router();
import {getAllBooks, createBook, getBookById, deleteBook} from '../controllers/bookController.js';
import { authenticateUser } from '../middleware/auth.js';

router.get('/', getAllBooks);
router.post('/', authenticateUser, createBook);
router.get('/:id', getBookById);
router.delete('/:id', authenticateUser, deleteBook);

export default router;