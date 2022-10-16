const { Art } = require("../../../models");
const { User } = require("../../../models");
const { Trade } = require("../../../models");

module.exports = {
  get: async (req, res) => {
     
    if(!req.session.user_id){
      return res.status(401).json({ message: "not authorized" });
    }

    try {
      const user_id = req.session.user_id;

      const userInfo = await User.findOne({
        where: {user_id: user_id},
        attributes:  ['id', 'user_artistname']
      });

      const userId = userInfo.dataValues.id.toString();
      const user_artistname = userInfo.dataValues.user_artistname.toString();

      const { count, rows } = await Art.findAndCountAll({
        include: [
          {
            model: Trade
          }
        ],
        where: {art_user_id: userId}
      });
      res.status(200).json({
        message: "get artist mypage success",
        count: count,
        data: rows,
        user_artistname: user_artistname,
      });
    } catch (error) {
      console.log(error);
    }
  }
};
