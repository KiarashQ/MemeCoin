const anchor = require("@project-serum/anchor");

module.exports = async function (provider) {
  // Configure the client to use the local cluster.
  anchor.setProvider(provider);

  // Deploy your program here.
};
