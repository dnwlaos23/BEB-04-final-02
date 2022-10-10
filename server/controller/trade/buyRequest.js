const { Trade } = require("../../models");

module.exports = {
    post: async (req, res) => {

      if(!req.session.user_id){
        return res.status(401).json({ message: "not authorized" });
      }
      
      try {
        const user_id = req.session.user_id
        const art_id = req.body.id

        const tradeInfo = await Trade.findOne({
          where: {trade_art_id: art_id, trade_user_id: user_id, trade_state: 1}
        })

        if(tradeInfo !== null){
          return res.status(200).send({
            message: 'already requested'
          });
        }

        Trade.create({
          trade_art_id: art_id,
          trade_user_id: user_id,
          trade_state: 1, // 구매 요청 상태
        })
        
        res.status(200).send({
          message: 'request success'
        })
      } catch (error) {
        console.log(error);        
      }
    }
  };
  