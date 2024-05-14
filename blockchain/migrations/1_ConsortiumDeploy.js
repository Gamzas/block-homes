const consortium = artifacts.require("MinistryDIDRegistry");
const userDID = artifacts.require("UserDIDRegistry");

module.exports = function (deployer) {
  deployer.deploy(consortium).then(function(consortiumIt){
    let promise1 = consortiumIt.createDIDDocument("0xcd48b32650621694240fafb2d467cdb52fd95795","0x045b52fe522a52deba904bdca0bd15c52e64083e587ddde74575efeb2996f0e3dec5e93c1b93ffba9038c3f82f2099f0d0b39c14e4cba3b60d5e380870a1f401c5");
    let promise2 = consortiumIt.createDIDDocument("0xc0a88521a8669e453c02d37ceed99dbb0a4dc508","0x04d45d06c55261b1c243f01717f08ef99398d7e5ab7ca1fa9cde225efd9acd157b25e2594483ce5b2d99f4be543b8bfbe7a7def17e56c9c6158a5b65b63b32f7c5");
    let promise3 = consortiumIt.createDIDDocument("0x47a54b46770cc839830cbb150f7fa49c90e880ac","0x049a9fbe31bf62596456abbef7e21d6ed9f80c96a8c14fd3d1fa4f7a4ae8b21433d344e2a92d0ea6bd322e64e28ef6f11fdb6ac92c5ca2e6afe100575b5475fd6e");
    let promise4 = consortiumIt.createDIDDocument("0xb5496deda0d1aa1f7ba39d0217642bcd74ae6cd4","0x04d91ab5b3916038309516f802382459cbcbadd8ccdcd9cbedaf1f4862c187e178f8840cde4de848b9d5dd0051afe7e22dee71b105e0ea3d3c24e85ca9eb6191ee");

    return Promise.all([promise1, promise2, promise3,promise4]);
  }).then(function(results) {
    // results 배열은 각 함수 호출의 결과를 순서대로 포함합니다.
    console.log('Results of all function calls:', results);
  }).catch(function(err) {
      // 에러 처리
      console.error("An error occurred during the function calls:", err);
  });
};

module.exports = function (deployer) {
    deployer.deploy(userDID);
}
