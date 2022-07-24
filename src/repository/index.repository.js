module.exports = {
  get: async () => {
    try {
      return true;
    } catch (err) {
      throw new Error(err);
    }
  },
};