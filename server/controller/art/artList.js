const { Art } = require("../../models");

module.exports = {
  get: async (req, res) => {
    try {
      
      const { count, rows } = await Art.findAndCountAll({
        where: { art_state: 0},
        order: [["id", "desc"]] 
      });

      res.status(200).json({
        message: "get art list success",
        count: count,
        data: rows,
      });
    } catch (err) {
      console.log(err);
    }
  },
};