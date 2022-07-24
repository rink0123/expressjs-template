const IndexRepository = require('../repository/index.repository');

module.exports = {
  get: async () => {
    try {
      let results = await IndexRepository.get();

      return results;
    } catch (err) {
      throw new Error(err);
    }
  },
};