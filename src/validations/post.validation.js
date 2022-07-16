const Joi = require('joi');

const createPost = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
  })
}

module.exports = {
  createPost,
}
