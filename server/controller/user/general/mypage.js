const { Art } = require("../../../models");
const { Trade } = require("../../../models");
const { Op } = require("sequelize");

module.exports = {
  get: async (req, res) => {

    if(!req.session.user_id){
      return res.status(401).json({ message: "not authorized" });
    }
    
    try {
      const user_id = req.session.user_id;

      const { count, rows } = await Trade.findAndCountAll({
        include: [
          {
            model: Art
          }
        ],
        where: {trade_user_id: user_id, trade_state:{ [Op.ne]: 0}},
      });
  
      res.status(200).json({
        message: "get general mypage success",
        count: count,
        data: rows,
      });
    } catch (error) {
      console.log(error);
    }
  }
};