const userDID = artifacts.require("UserDIDRegistry")
const citizenship = artifacts.require("CitizenshipVCRegistry");

module.exports = function (deployer) {
    deployer.deploy(userDID);
    deployer.deploy(citizenship);
}