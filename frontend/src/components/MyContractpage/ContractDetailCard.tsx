import { LeaseContractType } from '@/types/components/estateContractType'
import { transformData } from '@/utils/conversionUtils'
import * as d from '@components/MyContractpage/style/ContractDetailCardStyle'

interface PropType {
  ContractInfo: LeaseContractType
}
const ContractDetailCard = () => {
  const data =
    '잔금일까지 해당 주택에 근저당 추가 설정하지 않는다/ 계약기간이 만료되면 새 임차인을 구하는 여부와 관계 없이 만료일에 보증금을 반환해준다/ 만기전 퇴거 시 새 임차인의 중개보수를 임차인이 부담한다/ 만기전 퇴거 시 새 임차인의 중개보수를 임차인이 부담한다.'
  const result = transformData(data)

  console.log(result)

  return (
    <d.DetailCardContainer>
      <img
        className="bgimg"
        src="/image/image_mypage_certification.png"
        alt=""
      />
      <d.TiTleContainer>부 동 산 임 대 차 계 약 서</d.TiTleContainer>
      <d.EstateInfoContainer>
        <img src="/image/image_oneroom.png" alt="집" />
        <div className="content-box">
          <div className="title">부동산 정보</div>
          <div className="did">0x15b84A76cd54E0D086FE0E40Cb3eAc3dB3e9a000</div>
        </div>
      </d.EstateInfoContainer>
      <d.InfoWrapper>
        <d.InfoContainer>
          <div className="title">소재지</div>
          <div className="detail">광주광역시 광산구 장신로 20번길 13-12</div>
        </d.InfoContainer>
      </d.InfoWrapper>
      <d.EstateInfoContainer>
        <img src="/image/image_VC_certification.png" alt="계약" />
        <div className="content-box">
          <div className="title">계약정보</div>
        </div>
      </d.EstateInfoContainer>
      <d.InfoWrapper>
        <d.InfoContainer>
          <div className="title">계약인</div>
          <div className="did">0x15b84A76cd54E0D086FE0E40Cb3eAc3dB3e9a000</div>
        </d.InfoContainer>
        <d.InfoContainer>
          <div className="title">임대기간</div>
          <div className="detail">6 년</div>
        </d.InfoContainer>
        <d.InfoContainer>
          <div className="title">보증금 및 월세</div>
          <div className="detail">2억</div>
        </d.InfoContainer>
        <d.InfoContainer>
          <div className="title">계약 날짜</div>
          <div className="detail">2024-05-17</div>
        </d.InfoContainer>
        <d.TermsBox>
          <div className="title">특약사항</div>
          {result.map(term => (
            <div className="terms">{term}</div>
          ))}
        </d.TermsBox>
      </d.InfoWrapper>
      <d.CloseBtn>닫기</d.CloseBtn>
    </d.DetailCardContainer>
  )
}

export default ContractDetailCard
