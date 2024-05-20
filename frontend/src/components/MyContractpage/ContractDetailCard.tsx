import {
  LeaseContractType,
  RealEstateInfoType,
} from '@/types/components/estateContractType'
import {
  convertBigNumber,
  convertKlayToKRW,
  transformData,
} from '@/utils/conversionUtils'
import { getDIDValue } from '@/utils/didUtils'
import { getRealEstateType } from '@/utils/estateTransferUtil'
import * as d from '@components/MyContractpage/style/ContractDetailCardStyle'

interface PropType {
  contractInfo: LeaseContractType
  estateInfo: RealEstateInfoType
  setShowContract: (show: boolean) => void
}
const ContractDetailCard = (props: PropType) => {
  // const data =
  //   '잔금일까지 해당 주택에 근저당 추가 설정하지 않는다/ 계약기간이 만료되면 새 임차인을 구하는 여부와 관계 없이 만료일에 보증금을 반환해준다/ 만기전 퇴거 시 새 임차인의 중개보수를 임차인이 부담한다/ 만기전 퇴거 시 새 임차인의 중개보수를 임차인이 부담한다.'
  const { contractInfo, estateInfo, setShowContract } = props
  const result = transformData(contractInfo.terms)
  // console.log(estateInfo)
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
          <div className="did">{getDIDValue(contractInfo.propertyDID)}</div>
        </div>
      </d.EstateInfoContainer>
      <d.InfoWrapper>
        <d.InfoContainer>
          <div className="title">소재지</div>
          <div className="detail">{estateInfo.roadNameAddress}</div>
        </d.InfoContainer>
        <d.InfoContainer>
          <div className="title">건물명</div>
          <div className="detail">{estateInfo.buildingName}</div>
        </d.InfoContainer>
        <d.InfoContainer>
          <div className="title">세부정보</div>
          <div className="detail">{estateInfo.roomNumber}호</div>
        </d.InfoContainer>
        <d.InfoContainer>
          <div className="title">매물 용도</div>
          <div className="detail">{estateInfo.purpose}</div>
        </d.InfoContainer>
        <d.InfoContainer>
          <div className="title">매물 타입</div>
          <div className="detail">
            {getRealEstateType(estateInfo.estateType)}
          </div>
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
          <div className="did">{getDIDValue(contractInfo.tenantDID)}</div>
        </d.InfoContainer>
        <d.InfoContainer>
          <div className="title">계약타입</div>
          <div className="detail">전세</div>
        </d.InfoContainer>
        <d.InfoContainer>
          <div className="title">임대기간</div>
          <div className="detail">{contractInfo.leasePeriod} 년</div>
        </d.InfoContainer>
        <d.InfoContainer>
          <div className="title">보증금</div>
          <div className="detail">
            {' '}
            {convertKlayToKRW(convertBigNumber(contractInfo.deposit._hex))}{' '}
          </div>
        </d.InfoContainer>
        <d.InfoContainer>
          <div className="title">계약 날짜</div>
          <div className="detail">{contractInfo.contractDate}</div>
        </d.InfoContainer>
        {result.length !== 0 && (
          <d.TermsBox>
            <div className="title">특약사항</div>
            {result.map(term => (
              <div className="terms">{term}</div>
            ))}
          </d.TermsBox>
        )}
      </d.InfoWrapper>
      <d.CloseBtn onClick={() => setShowContract(false)}>닫기</d.CloseBtn>
    </d.DetailCardContainer>
  )
}

export default ContractDetailCard
