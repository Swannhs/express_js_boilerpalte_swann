const { Post } = require('../models');

const createPost = async (post) => {
  return Post.create(post);
}

const getPosts = async () => {
  return Post.find();
}

module.exports = {
  createPost,
  getPosts,
}
