const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

router.post('/', async (req, res, next) => {
  try {

    const { content, name,image } = req.body

    if (content) {
      const addPost = await Post.create({
        content, name, image
      })
      res.status(200).send({
        status: true,
        addPost
      })
      
    }else{
      res.status(400).json({
        status: 'false',
        "message": "欄位未填寫正確，或無此 todo ID"
      });
    }


  } catch (error) {
    res.status(400).json({
      status: 'false',
      "message": "欄位未填寫正確，或無此 todo ID"
    });
  }
})


module.exports = router;

