const bcrypt = require("bcrypt");
const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    try {
      const { user_id, user_pass, user_artistname, user_name, user_birth} = req.body;

      const hashedPassword = await bcrypt.hash(user_pass, 12);

      User.create({
        user_id: user_id,
        user_pass: hashedPassword,
        user_name : user_name,
        user_birth: user_birth,
        user_artistname: user_artistname
      })
      
      res.status(201).json({ message: "create User!" });
    } catch (error) {
      console.log(error)
    }
  },
};
