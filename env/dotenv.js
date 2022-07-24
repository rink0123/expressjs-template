const path = require('path');
let dotenv = require('dotenv');

dotenv = dotenv.config({
  path: path.join(__dirname, (process.env.NODE_ENV === 'prod') ? '.prod.env' : '.dev.env')
}).parsed;

module.exports = dotenv;