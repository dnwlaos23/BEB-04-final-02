const { Art } = require("../../models");
const { User } = require("../../models");


module.exports = {
  post: async (req, res) => {
    const {art_name, art_size, art_genre, art_image, art_desc, art_price} = req.body;

    if(!req.session.user_id){
      return res.status(401).json({ message: "not authorized" });
    }

    try {
      const user_id = req.session.user_id

      const userInfo = await User.findOne({
        where: {user_id: user_id},
        attributes:  ['id', 'user_artistname']
      });

      const userId = userInfo.dataValues.id.toString();

      const user_artistname = userInfo.dataValues.user_artistname.toString();

      Art.create({
        art_user_id: userId,
        art_name: art_name,
        art_size: art_size,
        art_genre: art_genre,
        art_image: art_image, 
        art_desc: art_desc,
        art_price: art_price,
        art_owner: user_id,
        art_artist: user_artistname,
        art_state: 0,
      })

      console.log("insert success");
      res.status(201).json({message: "insert success" })
    } catch (error) {
      console.log(error);
    }
  }
}