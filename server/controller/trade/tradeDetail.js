const { Trade } = require("../../models");
const { Art } = require("../../models");
const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      const art_id = req.body.id;
      const trade_user_id = req.body.trade_user_id;

      const tradeInfo = await Trade.findOne({
        include: { model: Art, where: { id: art_id } },
        where: { trade_art_id: art_id, trade_user_id: trade_user_id },
        attributes: ["trade_user_id","trade_state"],
      });

      const trade_state = tradeInfo.dataValues.trade_state.toString();

      const art_name = tradeInfo.dataValues.Art.art_name.toString();

      const art_owner = tradeInfo.dataValues.Art.art_owner.toString();

      const art_price = tradeInfo.dataValues.Art.art_price.toString();

      const ownerInfo = await User.findOne({
        where: {user_id: art_owner},
        attributes: ["user_name"],
      })

      const buyerInfo = await User.findOne({
        where: {user_id: trade_user_id},
        attributes: ["user_name"],
      })

      const owner_name = ownerInfo.dataValues.user_name.toString();

      const buyer_name = buyerInfo.dataValues.user_name.toString();

      res.status(200).send({
        message: 'get tradeDetail success',
        trade_user_id: trade_user_id,
        trade_state: trade_state,
        art_name: art_name,
        art_owner: art_owner,
        art_price: art_price,
        owner_name: owner_name,
        buyer_name: buyer_name,
      })
    } catch (error) {
      console.log(error);
    }
  },
};