const abi = require("./abi");
const contractAddr = require("./contractAddr");

const Caver = require("caver-js");
const caver = new Caver("https://api.baobab.klaytn.net:8651/");


module.exports = {
  get: async(req, res) => {
    try {

      const tokenContract = await new caver.klay.Contract(abi, contractAddr, {
        from: "0x505c94083EB4DAe6a2f92cE485a3335F631Be77C",
      });
      const totalSupply = await tokenContract.methods.totalSupply().call();

      console.log(totalSupply);
      res.send('test')
    } catch (error) {
      console.log(error);
    }
  }
}