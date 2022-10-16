const { User } = require("../../models");

module.exports = {
    post: async (req, res, next) => {
        try {
            const user_id = req.body.user_id;

            console.log(user_id);

            const checkId = await User.findOne({
                where: {
                    user_id: user_id,
                },
            }); 

            if (checkId) {
                res.status(200).json({ message: "already in use" });
            } else{
                res.status(200).json({message: "can be used"});
            }
        } catch (error) {
            console.log(error);
        }
    }
}