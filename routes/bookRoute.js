const express = require('express');
const router = express.Router();
const {getAllBooks, createBook, getBookById, deleteBook} = require('../controllers/bookController.js');

router.get('/', getAllBooks);
router.post('/', createBook);
router.get('/:id', getBookById);
router.delete('/:id', deleteBook);

module.exports = router;