const createError = require('http-errors');

module.exports = {
  notFound: (req, res, next) => {
    const notFound = new createError.NotFound();

    if (process.env.NODE_ENV === 'dev') {
      console.error(notFound.stack);
    } else {
      console.error(notFound.message);
    }

    return res
      .status(notFound.statusCode)
      .send({
        code: notFound.statusCode,
        message: notFound.message,
        data: {}
      });
  },

  errorHandler: (err, req, res, next) => {
    if (process.env.NODE_ENV === 'dev') {
      console.error(err.stack);
    } else {
      console.error(err.message);
    }

    return res
      .status(err.statusCode || 500)
      .send({
        code: err.statusCode,
        message: err.message,
        data: {}
      });
  }
};