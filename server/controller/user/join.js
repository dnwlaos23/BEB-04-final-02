const bcrypt = require("bcrypt");
const { User } = require("../../models");

const Caver = require("caver-js");
const caver = new Caver("https://api.baobab.klaytn.net:8651/");

module.exports = {
  post: async (req, res) => {
    try {
      const { user_id, user_pass, user_artistname} = req.body;

      const hashedPassword = await bcrypt.hash(user_pass, 12);

      const newWallet = caver.klay.accounts.create();

      const user_address = newWallet.address.toString();

      const user_privateKey = newWallet.privateKey.toString();

      User.create({
        user_id: user_id,
        user_pass: hashedPassword,
        user_artistname: user_artistname,
        user_address: user_address,
        user_privateKey: user_privateKey,
      });

      res.status(201).json({ message: "create User!" });
    
    } catch (error) {
      console.log(error)
    }
  },
};
