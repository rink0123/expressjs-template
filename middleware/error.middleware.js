const createError = require('http-errors');

const requestParam = (req) => {
  console.info("### Error API Parameters List ###");
  if (Object.keys(req.params).length !== 0) console.info("params: " + JSON.stringify(req.params));
  if (Object.keys(req.body).length !== 0) console.info("body: " + JSON.stringify(req.body));
  if (Object.keys(req.query).length !== 0) console.info("query: " + JSON.stringify(req.query));
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
};

module.exports = { notFound, errorHandler };