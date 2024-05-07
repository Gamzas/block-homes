const { Web3 } = require("web3");
// Klaytn 네트워크 RPC URL을 설정합니다.
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://api.baobab.klaytn.net:8651")
);

const address = "0xc0a88521a8669e453c02d37ceed99dbb0a4dc508";
const checksumAddress = web3.utils.toChecksumAddress(address);

console.log(checksumAddress); // Klaytn 주소의 체크섬 버전을 출력
