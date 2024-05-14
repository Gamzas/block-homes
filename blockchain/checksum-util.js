const { Web3 } = require("web3");
// Klaytn 네트워크 RPC URL을 설정합니다.
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.baobab.klaytn.net:8651")
);

const address = "0xcd48B32650621694240FAFB2D467CdB52fd95795";
const checksumAddress = web3.utils.toChecksumAddress(address);

console.log(checksumAddress); // Klaytn 주소의 체크섬 버전을 출력