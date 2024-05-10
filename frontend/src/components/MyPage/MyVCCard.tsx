import * as s from '@/components/MyPage/style/MyVCCardStyle'
import WalletAddress from './WalletAddress'

const MyVCCard = () => {
  const isLoggedin = true
  return (
    <s.VCCardWrapper>
      <s.VCCardContainer>
        <img
          className="background"
          src="image/image_mypage_certification.png"
          alt="배경사진"
        />
        {isLoggedin ? (
          <s.CertifiedContainer>
            <s.CertifiedTitle>
              <img
                className="title-img"
                src="image/image_VC_certification.png"
                alt="타이틀 이미지"
              />
              <div>
                <div className="title">신원증명</div>
                <WalletAddress />
              </div>
            </s.CertifiedTitle>
            <s.CertifiedContent>
              <div className="txt">해당 지갑은 공적 지갑임을 인증합니다</div>
              <img
                className="security-img"
                src="image/image_Ministry_of_Administration_Security.png"
                alt="행정안전부"
              />
            </s.CertifiedContent>
          </s.CertifiedContainer>
        ) : (
          <s.NotCertifiedContainer>
            <div className="txt">
              현재 로그인 된 지갑과 DID 가 연결되지 않았어요!
            </div>
            <div className="btn">
              <img
                className="btn-img"
                src="image/image_VC_certification.png"
                alt="타이틀 이미지"
              />
              <div className="btn-txt">본인인증하기</div>
            </div>
          </s.NotCertifiedContainer>
        )}
      </s.VCCardContainer>
    </s.VCCardWrapper>
  )
}

export default MyVCCard
