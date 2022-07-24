const IndexService = require('../service/index.service');

module.exports = {
  get: async (req, res, next) => {
    try {
      let results = await IndexService.get();

      res.status(200).send(results);
    } catch (err) {
      next(err);
    }
  }
};