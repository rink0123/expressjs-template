const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const envConfig = require('./config/env.config');
const { notFound, errorHandler } = require('./middleware/error.middleware');

const app = express();

app.use(logger('dev'));
app.use(cors({ exposedHeaders: 'Authorization', optionsSuccessStatus: 200 }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(helmet());

// router.
const indexRoute = require('./src/route/index.route');

app.use('/', indexRoute);

app.use(notFound); // catch 404 and forward to error handler.
app.use(errorHandler); // error handler.

app.listen(envConfig.PORT, () => {
  console.log(`[${process.env.NODE_ENV}] Express server listening on port: ${envConfig.PORT}`);
});