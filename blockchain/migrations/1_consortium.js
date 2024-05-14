const consortium = artifacts.require("UserDIDRegistry");
module.exports = function (deployer) {
  deployer.deploy(consortium);
};