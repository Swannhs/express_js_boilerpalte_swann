const express = require("express");
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const postValidation = require('../../validations/post.validation');
const postController = require("../../controllers/PostController");

const router = express.Router();

router
  .route("/")
  .get(postController.getPosts)
  .post(auth(),validate(postValidation.createPost),postController.createPost);

module.exports = router;
