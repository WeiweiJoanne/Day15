const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  /* 加入欄位驗證 */
  name: {
    type: String,
    require: [true, "姓名需填寫"]
  },
  content: {
    type: String,
    require:[true,"貼文內容需填寫"]
  },
  createAt:{
    type: Date,
    default: Date.now
  }
},{
  versionKey: false
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
