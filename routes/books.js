const express = require('express');
const router = express.Router();
const {addBook, getAllBooks, getBookById, updateBook, deleteBook} = require('../controllers/bookController');
const authMiddleware = require('../middleware/authenticate');
// Route to get all books
router.get('/',authMiddleware, getAllBooks);   
router.post('/',authMiddleware,addBook);
router.put('/:id',authMiddleware,updateBook);
router.get('/:id',authMiddleware,getBookById);
router.delete('/:id',authMiddleware,deleteBook);

module.exports = router;