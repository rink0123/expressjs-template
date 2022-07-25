const createError = require('http-errors');

const reqParams = (req) => {
  console.info("### Request Parameter ###");
  console.info('params:', JSON.stringify(req.params));
  console.info('query:', JSON.stringify(req.query));
  console.info('body:', JSON.stringify(req.body));
};

const notFound = (req, res, next) => {
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
};

const errorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'dev') {
    console.error(err.stack);
    reqParams(req);
  } else {
    console.error(err.message);
    reqParams(req);
  }

  return res
    .status(err.statusCode || 500)
    .send({
      code: err.statusCode,
      message: err.message,
      data: {}
    });
};

module.exports = { notFound, errorHandler };