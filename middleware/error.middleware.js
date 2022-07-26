const createError = require('http-errors');

const getRequest = (req) => {
  console.info("### Request Parameter ###");
  console.info('params:', JSON.stringify(req.params));
  console.info('query:', JSON.stringify(req.query));
  console.info('body:', JSON.stringify(req.body));
};

const setResponse = (code, message, data) => {
  return { code, message, data };
};

const notFound = (req, res, next) => {
  next(createError(404));
};

const errorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'dev') {
    console.error(err.stack);
  } else {
    console.error(err.message);
  }

  getRequest(req);

  res.status(err.statusCode || 500).send(setResponse(err.statusCode, err.message, {}));
  next();
};

module.exports = { notFound, errorHandler };