# 👀 Block Homes 🏠

<img src="assets/introduce.png">


### 🚀 배포링크 : ~~block-homes.kr~~ (운영 중단)

### 🎥 발표영상 : https://youtu.be/g1djwl5bwY0

## 💡기획배경

⁉ '전세사기는 왜 발생하는걸까?', '허위매물인지 확인하고 부동산을 가고싶은데 좋은 방법이 없을까?'라는 의문에서 저희 _블록홈즈_ 는 탄생하게 되었습니다.

## 🌳 프로젝트 개요

✅ **프로젝트 이름 : Block-Homes**

✅ **개발기간** : 📅 2024-04-08(월) ~ 2024-05-20(월)


<!-- ## 🌳 목차

1️⃣ [📖산출물](#📖-산출물)
<br />
2️⃣ [💡프로젝트 특징](#💡프로젝트-특징)
<br />
3️⃣ [📱 화면구현](#📱-화면구현)
<br />
4️⃣ -->

## 💡프로젝트 특징

### 🧪 주요 기능

1. klaytn 지갑 생성

2. 사용자, 부동산 did, did document 발급 및 등록

3. 사용자 신원 인증 vc 발급 및 검증

4. 부동산 소유권 vc 발급 및 검증

5. 매물 레포트를 통한 부동산 위험도 파악

6. 중개인이 없는 부동산 거래

7. 구매자와 판매자 간 채팅

8. 매물 지도

9. 관심 매물 등록 및 조회

### 🔧 기술 특이점

1. DID 기반 Issuer-Holder-Verifier 구현

   - P2P 네트워크에서 임대인과 임차인이 돌아가면서 Verifier 역할을 수행하며 개인의 자격 인증
   - TTP(Trusted Third Party)의 기능 최소화

2. PKI (Public Key Infrastructure) 기반 서명을 통한 트랜잭션 인증

   - 거래 내역 및 VC (Verifiable Credential)에 사용자 서명을 적용하여 유효성 검증

3. 프록시 서버를 거치지 않는 클라이언트 주도 블록체인 네트워크 통신

   - 부동산 및 사용자 DID Document, VC를 블록체인과 직접 통신하여 정보 조회 및 기록
   - 기록된 정보를 직접 조회함으로서 위변조 방지

4. 실시간 거래 진행을 위한 STOMP 및 외부 메시지 브로커 RabbitMQ 활용

5. 온보딩, 로딩 화면 시 Lottie를 활용한 3D 에셋 활용

   - 서비스 소개 화면 시 인터랙티브한 요소들을 활용하여 설명에 대한 이해도 향상
   - 블록체인 기록 시 오래 걸리는 시간동안 대기 화면에 3D 요소를 활용하여 진행 중인 절차에 대한 명확한 표현

6. klaytn network를 이용한 미래 대한민국 부동산 시장 구현

   - 실제 CBDC 실험 네트워크인 klaytn 네트워크에 contract 배포

7. ethers.js를 이용하여 react와 klaytn 연동

   - 각종 smart contract에 사용자의 서명 가능
   - 사용자 지갑 생성 및 잔액 조회 가능
   - 백엔드에 사용자 개인의 비밀번호로 암호화한 값을 저장하여 위변조 방지

8. ECDSA 알고리즘 기반의 서명

   - 256 bit의 작은 key로 RSA와 동일한 보안 레벨 유지

### 🛠 프로젝트 특장점

1. klaytn 지갑 생성

   - 사용자가 한쌍의 ECDSA 기반 키페어를 생성하고 klaytn 지갑을 만들 수 있도록 하는 기능

2. 사용자, 부동산 did, did document 발급 및 등록

   - 사용자, 부동산, 컨소시움 기관 등 모든 객체에게 did를 발급함으로써 체인 내에서의 모든 활동의 주체가 검증 가능

3. 사용자 신원 인증 vc 발급 및 검증

   - 모든 사용자가 신원을 인증받고 나서 활동이 가능하게 하여 대리 거래, 사기 등을 예방

4. 부동산 소유권 vc 발급 및 검증

   - 부동산의 소유권을 국토부가 vc로 사용자에게 발급하여 소유자와 거래자가 다른 상황이 발생하지 않음

5. 매물 레포트를 통한 부동산 위험도 파악

   - 해당 부동산의 did에서 불법 여부, 부동산 담보 대출 스마트 컨트랙트에서 대출금액을 측정하여 해당 매물에 대한 안전도를 측정, 사용자가 보기 편하도록 제공

6. 중개인이 없는 부동산 거래

   - 제 3자 없이 p2p로 이루어지는 부동산 계약은 체인 위에 기록됨으로 위변조의 가능성이 현저히 낮음
   - smart contract의 특성으로 인한 자동 이체로 탈세를 예방

7. 구매자와 판매자 간 채팅

   - 구매자와 판매자의 편리한 소통을 위한 매물 상세페이지에서 바로 채팅 기능 제공, 현재 계약 상태 한눈에 조회

8. 관심 매물 등록 및 조회

   - 관심 매물을 등록하고 조회할 수 있어 관심 매물 간의 비교가 빠르게 이루어질 수 있음

### ⛏ 기술관련 독창점

1. Backend의 기능을 최소화한 탈중앙화 BApp

2. 계약 단계 별 필요한 직관적인 화면 및 필요한 정보들 제공

3. 공식적으로 기록된 내용을 기반으로 생성된 매물 분석 레포트 제공

4. 인증 및 서명 로직을 통한 위변조 방지 기능 내포

5. 중앙은행 CBDC 발행 시 생겨날 서비스의 Prototype

## 💡 핵심 기능

   <img src="assets/main_function_1.gif">
<br />
<br />
   <img src="assets/main_function_2.gif">
<br />
<br />
   <img src="assets/main_function_3.PNG">

## ✨ 서비스 화면

### <온보딩>

- 3d asset 을 활용한 온보딩 화면

   <img src="assets/온보딩화면3.gif" height=500px >

### <로그인 및 vc 인증>

- vc 인증 후 로그인
- 회원가입 시 지갑 발급 및 키 암호화

   <img src="assets/로그인vc인증 .gif" height=500px >

### <메인화면>

- 부동산 DID 카드 조회 (부동산 거래 시 자동 등록 및 삭제)
- 매물 조회 위한 메뉴
- 서비스 설명을 위한 사용자 친화적 페이지

   <img src="assets/카드넘기기.gif" height=500px >
   <img src="assets/유저 친화적 화면.gif" height=500px >

### <매물조회>

- 매물 등급별 지도 위 오버레이 출력
- 매물 등급 별 색상을 구별 하여 매물 카드 출력
- 매물 상세 정보 조회 및 좋아요 기능
- 매물 등급 및 유형(전월세, 매매, 평수, 가격 등) 필터
- 동네 별 매물 조회(동네 검색 or 지도 중심의 반경 5km 이내 매물 조회)

   <img src="assets/지도.gif" height=500px >

### <매물 레포트>

- 각 매물별 위험등급 출력
- 매물 시세 그래프 제공
- 매물의 안전한 금액(보증금 등) 거래 가이드 제공
- 매물의 위험 요소 안내

   <img src="assets/레포트화면.gif" height=500px >

### <임차인 거래>

- 원하는 매물 존재 시 임대인에게 채팅
- 매물 체크리스트 작성
- 거래 진행상황 한눈에 파악 가능
- 특약사항 작성
- 부동산 계약서 작성
- 암호화 된 개인키를 사용하여 보증금 납부
- <div>
     <img src="assets/임차인거래1.gif" height=430px >
     <img src="assets/임차인거래2.gif" height=430px >
  </div>

### <임대인 거래>

- 채팅 메시지를 주고 받으며 거래 시작
- 거래 진행상황 한눈에 파악 가능
- 특약사항 작성
- 부동산 계약서 작성

   <img src="assets/임대인 거래1.gif" height=500px >
   <img src="assets/임대인 거래2.gif" height=500px >

### <마이페이지\_거래 계약서 및 사용자 지갑>

- 사용자 지갑의 잔액 확인 가능
- 사용자가 체결한 부동산 스마트 컨트랙트 조회 가능

  <img src="assets/임차인거래3.gif" height=430px >


<!-- ## 팀원 소개

| **김지현** | **김현지** | **송강산** | **오기선** | **정유나** | **천세진** |
| :--------: | :--------: | :--------: | :--------: | :--------: | :--------: |
|    사진    |    사진    |    사진    |    사진    |    사진    |    사진    | -->

<br>


## ⚙ **개발 환경**
<br>

**FE**
<br />
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Jotai-764ABC?style=for-the-badge&logo=zustand&logoColor=white">
<img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/three.js-000000?style=for-the-badge&logo=three.js&logoColor=white">
<img src="https://img.shields.io/badge/ethers-2535A0?style=for-the-badge&logo=ethers&logoColor=white">
<img src="https://img.shields.io/badge/pwa-FF6F00?style=for-the-badge&logo=pwa&logoColor=white">
<img src="https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=vite&logoColor=white">

**BlockChain**
<br />
<img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white">
<img src="https://img.shields.io/badge/remix-000000?style=for-the-badge&logo=remix&logoColor=white">
<img src="https://img.shields.io/badge/truffle-000000?style=for-the-badge&logo=truffle&logoColor=white">
<img src="https://img.shields.io/badge/klaytn-000000?style=for-the-badge&logo=klaytn&logoColor=white">

**BE**
<br />
<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">
<img src="https://img.shields.io/badge/Springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
<img src="https://img.shields.io/badge/SpringData-6DB33F?style=for-the-badge&logo=SpringData&logoColor=white">
<img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white">

**Infra**
<br />
<img src="https://img.shields.io/badge/AmazonEC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
<img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white">
<img src="https://img.shields.io/badge/sonarqube-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white">
<img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
<img src="https://img.shields.io/badge/rabbitMQ-FF6600?style=for-the-badge&logo=rabbitMQ&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">


## 📖 산출물

<!-- ### [🔗발표자료](/docs/발표자료.md) -->

### [🔗포팅메뉴얼](/exec/포팅매뉴얼_C203.md)

### [🔗기능명세서](/docs-design/기능명세서_C203.pdf)

### [🔗요구사항 정의서](/docs-design/요구사항정의서_C203.pdf)

### [🔗ABI 명세서](/docs-final/ABI_명세서_C203.pdf)

### [🔗API 명세서](/docs-final/API_명세서_C203.pdf)

### [🔗ERD](/docs-final/ERD_C203.png)

### [🔗시스템아키텍쳐](/docs-final/시스템아키텍쳐_C203.png)


## ✈ **팀원**

| 팀원   | 역할                         |
| ------ | ---------------------------- |
| 천세진 | 팀장, BE, BlockChain, DevOps |
| 김지현 | BE, BlockChain               |
| 김현지 | FE, UI/UX, chatting          |
| 송강산 | FE, 3D/Wallet, DevOps        |
| 오기선 | FE, Contract Deploy          |
| 정유나 | FE, UI/UX, RealEstateItem    |
