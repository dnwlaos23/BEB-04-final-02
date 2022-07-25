const { Trade } = require("../../../models");
const { User } = require("../../../models");

const mintNFT = require("../../../functions/mintNFT");

module.exports = {
  post: async (req, res) => {
    try {
      const art_id = req.body.id;
      const trade_user_id = req.body.trade_user_id;

      const tradeInfo = await Trade.findOne({
        where: { trade_art_id: art_id, trade_user_id: trade_user_id },
      });

      const trade_state = tradeInfo.dataValues.trade_state;

      console.log(trade_state);

      if(trade_state === 2){
        return res.status(200).send({
          message: "buyer has not confirmed"
        })
      }

      const owner_id = req.session.user_id;
      const buyer_id = trade_user_id;

      const ownerInfo = await User.findOne({
        where: { user_id: req.session.user_id},
        attributes: ['user_privateKey']
      })

      const owner_pk = ownerInfo.dataValues.user_privateKey.toString();

      const buyerInfo = await User.findOne({
        where: { user_id: trade_user_id},
        attributes: ['user_privateKey']
      })

      const buyer_pk = buyerInfo.dataValues.user_privateKey.toString();

      const mintData = await mintNFT(owner_id, buyer_id, owner_pk);

      // Trade.update({trade_state : 4},{
      //   where: { trade_art_id: art_id, trade_user_id: trade_user_id },
      // })

      //작가 지갑 개인키와 사용자 지갑 주소 찾아서 mintNFT 함수에 넘겨줘야함. 

      res.status(200).send({
        message: "confirm contract success"
      })
    } catch (error) {
      console.log(error);
    }
  },
};
