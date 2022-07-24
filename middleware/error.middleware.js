const createError = require('http-errors');

module.exports = {
  notFound: (req, res, next) => {
    res.status(404).send({
      code: 404,
      message: 'Not Found',
      data: {}
    });
  },

  errorHandler: (err, req, res, next) => {
    res.status(err.status || 500).send({
      code: err.status,
      message: err.message,
      data: {}
    });
  }
};