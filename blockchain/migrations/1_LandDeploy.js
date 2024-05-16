const realEstateDID = artifacts.require("RealEstateDIDRegistry");

module.exports = function (deployer) {
    deployer.deploy(realEstateDID).then(function(reDID){
      const promise1 = reDID.createDIDDocument("광주 광산구 장신로 20번길 13-12", "유나 원룸", 1, 101, false, true, 3, "20", 1715842042, "다가구주택");
      const promise2 = reDID.createDIDDocument("광주 광산구 풍영로229번안길 2-14", "세진 원룸", 1, 303, false, false, 3, "23", 1715842042, "다가구주택");
      const promise3 = reDID.createDIDDocument("광주 광산구 장덕로50번길 8", "기선 원룸", 1, 204, true, false, 3, "19", 1715842042, "다가구주택");
      const promise4 = reDID.createDIDDocument("광주 광산구 풍영로229번안길 2-16", "지현 원룸", 1, 408, false, false, 3, "25", 1715842042, "다가구주택"); 
      const promise5 = reDID.createDIDDocument("광주 광산구 장덕로50번길 12-3", "강산 원룸", 1, 205, true, true, 3, "15", 1715842042, "다가구주택") ;

      return Promise.all([promise1, promise2,promise3, promise4,promise5]);
    }).then(function(results) {
      // results 배열은 각 함수 호출의 결과를 순서대로 포함합니다.
      console.log('Results of all function calls:', results);
    }).catch(function(err) {
        // 에러 처리
        console.error("An error occurred during the function calls:", err);
    });
  };