const realEstateInfo = artifacts.require("RealEstateDIDInfo");
const realEstateDID = artifacts.require("RealEstateDIDRegistry");

module.exports = function (deployer) {
    deployer.deploy(realEstateDID).then(function(reDID){

      const promise1 = reDID.createDIDDocument("광주광역시 북구 첨단과기로 123번길", "첨단 레지던스", 201, 101, false, false, 12, 100, "350m^2", "철근 콘크리트", "주거용", "18m", "슬래브");
      const promise2 = reDID.createDIDDocument("광주광역시 서구 상무대로 456번길", "상무 아파트", 202, 202, true, false, 20, 200, "600m^2", "벽돌", "주거용", "20m", "경사지붕");

      return Promise.all([promise1, promise2]);
    }).then(function(results) {
      // results 배열은 각 함수 호출의 결과를 순서대로 포함합니다.
      console.log('Results of all function calls:', results);
    }).catch(function(err) {
        // 에러 처리
        console.error("An error occurred during the function calls:", err);
    });
  };