const joi = require("joi");

const validateBookPOST = (book) => {
  const schema = {
    name: joi.string().min(3).required(),
    author: joi.string().min(3).required(),
  };

  return joi.validate(book, schema);
};

const validateBookPUT = (book) => {
  const schema = {
    name: joi.string().min(3),
    author: joi.string().min(3),
  };

  return joi.validate(book, schema);
};

module.exports = {
  validateBookPOST,
  validateBookPUT
};
