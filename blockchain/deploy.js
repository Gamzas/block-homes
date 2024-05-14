const Caver = require('caver-js');
const fs = require('fs');

// Klaytn API 서비스 또는 자체 노드 URL 설정
const caver = new Caver('https://api.baobab.klaytn.net:8651');

const privateKey = '0x926b6c29e43b2ac5f86f384c06cefe500abb7be6681e185e95f9403bbd902c8b';

const contractABI = JSON.parse(fs.readFileSync('./build/contracts/UserDIDRegistry.json', 'utf8')).abi;
const contractByteCode = JSON.parse(fs.readFileSync('./build/contracts/UserDIDRegistry.json', 'utf8')).bytecode;

async function deployContract() {
    // 계정 설정
    const deployer = caver.wallet.keyring.createFromPrivateKey(privateKey);
    caver.wallet.add(deployer);

    // 스마트 계약 객체 생성
    const contract = new caver.contract(contractABI);

    // 계약 배포 트랜잭션 객체 생성
    const deployTx = contract.deploy({
        data: contractByteCode,
        arguments: [] // 생성자 인수가 있다면 여기에 추가
    });

    // 수수료 대납을 위한 서명 및 배포 트랜잭션 생성
    const { rawTransaction: deployerRawTx } = await deployTx.sign(deployer.address);

    const { rawTransaction: feeDelegatedTx } = await caver.transaction.feeDelegatedSmartContractDeploy.sign({
        from: deployer.address,
        gas: '5000000',
        feePayer: deployer.address,
        senderRawTransaction: deployerRawTx
    }, privateKey);

    // 서명된 트랜잭션을 네트워크에 전송
    const receipt = await caver.rpc.klay.sendRawTransaction(feeDelegatedTx);
    console.log('Contract deployed at:', receipt.contractAddress);
}

deployContract().catch(console.error);