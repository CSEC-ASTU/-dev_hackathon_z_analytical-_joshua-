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
  company_name: {
    isEmpty: {
      negated: true,
      errorMessage: `Company name is required`,
    },
    isString: {
      errorMessage: `Company name must be a string`,
    },
  },
});