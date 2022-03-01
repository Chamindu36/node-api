const Post = require('../models/post');

exports.getPosts = (req, res) => {
    const posts = Post.find().select("_id title body")
        .then((posts) =>{
            res.status(200).json({ posts});
        })
        .catch( (error) => {
            res.status(400).json({error});
        })
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    console.log("Creating POST : ", req.body);
    post.save().then( result => {
        res.status(200).json({
            post:result
        });
    });

};