const { Art } = require("../../../models");
const { Trade } = require("../../../models");
const { Op } = require("sequelize");

module.exports = {
  post: async (req, res) => {
    if (!req.session.user_id) {
      return res.status(401).json({ message: "not authorized" });
    }

    try {
      const { id } = req.body;

      const artInfo = await Art.findOne({
        where: { id: id },
      });

      const tradeCount = await Trade.count({
        where: { trade_art_id: id, trade_state: { [Op.or]: [2, 3] } },
      });

      if (tradeCount !== 0) {
        const afterTradeInfo = await Trade.findOne({
          where: { trade_art_id: id, trade_state: { [Op.or]: [2, 3] } },
        });

        return res.status(200).json({
          message: "get artist detail one success",
          data: afterTradeInfo,
          artInfo: artInfo.dataValues,
        });
      }

      const { count, rows } = await Trade.findAndCountAll({
        where: { trade_art_id: id, trade_state: 1 },
      });

      res.status(200).json({
        message: "get artist detail success",
        count: count,
        data: rows,
        artInfo: artInfo.dataValues,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
