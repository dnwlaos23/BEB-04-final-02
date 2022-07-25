const { Trade } = require("../../../models");

module.exports = {
  post: async (req, res) => {
    if (!req.session.user_id) {
      return res.status(401).json({ message: "not authorized" });
    }

    try {
      const user_id = req.session.user_id;
      const art_id = req.body.id;

      const tradeInfo = await Trade.update(
        { trade_state: 3 },
        {
          where: { trade_art_id: art_id, trade_user_id: user_id },
        }
      );

      console.log(tradeInfo);
      res.status(200).send({ message: "confirmContract success" });
    } catch (error) {
      console.log(error);
    }
  },
};
