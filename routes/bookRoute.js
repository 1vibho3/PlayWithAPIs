import express from 'express';
const router = express.Router();
import {getAllBooks, createBook, getBookByTitle, deleteBook, updateBookByTitle} from '../controllers/bookController.js';
import { authenticateUser } from '../middleware/auth.js';

router.get('/', getAllBooks);
router.post('/', authenticateUser, createBook);
router.get('/:title', getBookByTitle);
router.delete('/:title', authenticateUser, deleteBook);
router.patch('/:title', updateBookByTitle);

export default router;