module.exports = {
  post: (req, res) => {
    try {
      console.log(req.session.user_id);
      if (!req.session.user_id) {
        res.status(400).send({message: "logout fail"});
      } else {
        res.status(200).send({message: "logout success"});
        req.session.destroy();
      }
    } catch (error) {
      console.log(error);
    }
  },
};
