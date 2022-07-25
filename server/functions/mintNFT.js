const abi = require("../controller/web3/abi");
const contractAddr = require("../controller/web3/contractAddr");

const Caver = require("caver-js");
const caver = new Caver("https://api.baobab.klaytn.net:8651/");

const ipfsUpload = require("./ipfsUpload");

async function mintNFT(owner_id, buyer_id, owner_pk) {
      const json = JSON.stringify({
        owner_id: owner_id,
        buyer_id: buyer_id,
      });

      const jUrl = await ipfsUpload(json);

      const account = await caver.klay.accounts.wallet.add(owner_pk);

      const tokenContract = await new caver.klay.Contract(abi, contractAddr);
      tokenContract.options.address = contractAddr;

      const tx = await tokenContract.methods.mintNFT(jUrl)
      .send({
        from: account.address.toString(),
        gas: 2000000,
      });

      console.log(tx);

      return tx;
}

module.exports = mintNFT

