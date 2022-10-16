const { Art } = require("../../../models");
const { Trade } = require("../../../models");

module.exports = {
  post: async (req, res) => {
    if (!req.session.user_id) {
      return res.status(401).json({ message: "not authorized" });
    }

    try {
      const art_id = req.body.id;
      const user_id = req.session.user_id;

      const detailInfo = await Art.findOne({
        include: { model: Trade, where: { trade_user_id: user_id } },
        where: { id: art_id },
      });

      res.status(200).send({
        message: "get general detail success",
        data: detailInfo,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
