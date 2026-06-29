const Joi = require("joi");

const articleSchema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().allow("").optional(),
  image: Joi.string().uri().allow("").optional(),
  url: Joi.string().uri().required(),
  source: Joi.string().trim().required(),
  publishedAt: Joi.date().required(),
});

module.exports = {
  articleSchema,
};