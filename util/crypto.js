const crypto = require('node:crypto');

const envConfig = require('../config/env.config');

module.exports = {
  enMdcSha2: (password) => {
    try {
      const salt = crypto.randomBytes(256).toString('hex');
      const _password = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha256').toString('hex');
      return {
        salt,
        password: _password
      };
    } catch (err) {
      throw err;
    }
  }
}