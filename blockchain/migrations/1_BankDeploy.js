const bank = artifacts.require("bank");

module.exports = function (deployer) {
    deployer.deploy(bank).then(function(bank){
        const promise1 = bank.createLoan("0x68Bdec4DA58ab08cFb72c815Fe695FABac8F2588",1,"did:klay:0x5cf9f8c31624c63759c152d733b46f48f9d37954");
        const promise2 = bank.createLoan("0x68Bdec4DA58ab08cFb72c815Fe695FABac8F2588",1,"did:klay:0x3cac061cd8c688ffa5fa14a6d644b907e29e0fc4");
        return Promise.all([promise1, promise2]);
      }).then(function(results) {
        // results 배열은 각 함수 호출의 결과를 순서대로 포함합니다.
        console.log('Results of all function calls:', results);
      }).catch(function(err) {
          // 에러 처리
          console.error("An error occurred during the function calls:", err);
      });
}