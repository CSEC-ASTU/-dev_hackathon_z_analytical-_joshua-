const { checkSchema } = require('express-validator');

exports.portfolioRules = checkSchema({
  title: {
    isEmpty: {
      negated: true,
      errorMessage: `Title is required`,
    },
    isString: {
      errorMessage: `Title must be a string`,
    },
  },
  description: {
    isEmpty: {
      negated: true,
      errorMessage: `Description is required`,
    },
    isString: {
      errorMessage: `Description must be a string`,
    },
  },
});