const { Trade } = require("../../models");
const { Art } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      const art_id = req.body.id;
      const trade_user_id = req.body.trade_user_id;

      const tradeInfo = await Trade.update(
        {trade_state: 1},
        {
          where:{trade_art_id: art_id, trade_user_id: trade_user_id
        }
      });

      Art.update({art_state: 0},{
        where:{id: art_id}
      });

      res.status(200).json({
        message: "cancle reservation success"
      });

    } catch (error) {
      console.log(error)
    }
  }
}