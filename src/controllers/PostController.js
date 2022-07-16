const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { postService } = require("../services");

const createPost = catchAsync(async (req, res) => {
  console.log(req.user)
  return res.status(httpStatus.CREATED).send(await postService.createPost(req.body));
});

const getPosts = catchAsync(async (req, res) => {
  return res.status(httpStatus.OK).send(await postService.getPosts());
});

module.exports = {
  createPost,
  getPosts,
}
