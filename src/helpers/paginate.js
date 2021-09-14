/**
   * Reusable method to enable pagination for the sake of not overbardening db
   * @param {integer} page  specifies which page to load
   * @param {integer} limit  number of items per page
   * @memberof UserService
   * @returns {object} offset, limit and info to be attached for findAll sequelize method
   */
  const paginate = (page = 1, limit = 5) => {
    const offset = (Number(page) - 1) * Number(limit);
    const info = {};

    if (offset > 0) {
      info.previous = {
        page: Number(page) - 1,
        limit
      };
    }
    return {
      offset,
      limit,
      info
    };
  };
  export default paginate;