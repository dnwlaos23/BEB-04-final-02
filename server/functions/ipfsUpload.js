const IpfsApi = require("ipfs-api");
const ipfs = IpfsApi("ipfs.infura.io", "5001", { protocol: "https" });

async function ipfsUpload(json) {

  const data = Buffer.from(json)

  const jsonAdded = await ipfs.add(data);

  const path = jsonAdded[0].path;

  const jUrl = `https://ipfs.infura.io/ipfs/${path}`;

  console.log(jUrl);

  return jUrl;
}

module.exports = ipfsUpload;
