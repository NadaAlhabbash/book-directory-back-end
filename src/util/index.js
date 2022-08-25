const joi = require("joi");

const validateBookPOST = (book) => {
  const schema = joi.object({
    name: joi.string().min(3).required(),
    author: joi.string().min(3).required(),
    edition: joi.number().required(),
    img: joi.string(),
  });

  return schema.validate(book);
};

const validateBookPUT = (book) => {
  const schema = joi.object({
    name: joi.string().min(3),
    author: joi.string().min(3),
    edition: joi.number(),
    img: joi.string(),
  });

  return schema.validate(book);
};



module.exports = {
  validateBookPOST,
  validateBookPUT
};
