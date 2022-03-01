const express = require('express');
const { createPost, getPosts } = require('../controllers/post');
const { createPostValidator } = require('../validator');

const router = express.Router();

router.get('/', getPosts);
router.post('/create', createPostValidator, createPost)

module.exports = router;