const bcrypt = require("bcrypt");
const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      const { user_id, user_pass } = req.body;

      const userInfo = await User.findOne({
        where: { user_id: user_id },
      });

      if (!userInfo) {
        return res.status(401).json({ message: "login fail" });
      }

      const result = await bcrypt.compare(user_pass, userInfo.user_pass);
      if (!result) {
        return res.status(401).json({ message: "login fail" });
      }

      console.log(userInfo.dataValues.user_artistname);

      const userInfo2 = await User.findOne({
        where: { user_id: user_id },
        attributes: ["user_id", "user_artistname"],
      });

      req.session.save(function () {
        req.session.user_id = userInfo.user_id;
        if (userInfo.dataValues.user_artistname != null) {
          req.session.user_artistname =
            userInfo.dataValues.user_artistname.toString();
        }
        console.log(req.session);
        res.json({ data: userInfo2, message: "login success" });
      });
    } catch (error) {
      console.log(error);
    }
  },
};
