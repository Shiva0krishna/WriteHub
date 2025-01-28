// routes/commentRoutes.js

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to add a comment
router.post('/add', authMiddleware.verifyToken, commentController.addComment);

module.exports = router;
