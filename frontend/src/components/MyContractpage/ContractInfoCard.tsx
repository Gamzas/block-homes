import { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { userAtom } from '@/stores/atoms/userStore'
import { getContractInfo } from '@/abi/userSmartContract/getContractInfo'
import { useGetRealEstateInfo } from '@/abi/realEstateInfo/getRealEstateInfo'
import { getDIDValue } from '@/utils/didUtils'
import * as c from '@components/MyContractpage/style/ContractInfoCardStyle'
import { convertBigNumber, convertKlayToKRW } from '@/utils/conversionUtils'
import { LeaseContractType } from '@/types/components/estateContractType'
import ContractDetailCard from './ContractDetailCard'

interface PropsType {
  contractAddress: string
}

const ContractInfoCard = ({ contractAddress }: PropsType) => {
  const [user] = useAtom(userAtom)
  const [contractInfo, setContractInfo] = useState<LeaseContractType | null>(
    null,
  )
  const [propertyDID, setPropertyDID] = useState<string | null>(null)
  // 부동산 계약서 토글
  const [showContract, setShowContract] = useState<boolean>(false)

  // 계약 정보
  useEffect(() => {
    const fetchContractInfo = async () => {
      try {
        const res = await getContractInfo(contractAddress)
        setContractInfo(res.contractInfo)
        setPropertyDID(res.contractInfo.propertyDID)
      } catch (error) {
        console.error(error)
      }
    }

    fetchContractInfo()
  }, [contractAddress])
  //  부동산 정보
  const { data: realEstateInfoData, isLoading: realEstateLoading } =
    useGetRealEstateInfo(propertyDID || '')

  if (!contractInfo || realEstateLoading) {
    // return <ItemLoading />
    return null
  }
  // console.log(realEstateInfoData)
  const lordDID = getDIDValue(contractInfo.landlordDID)
  if (!propertyDID) {
    return null
  }


  return (
    <c.InfoWrapper>
      <c.MyEstateCardContainer onClick={() => setShowContract(!showContract)}>
        <div className="info-wrapper">
          <c.IconContainer>
            <img src="/image/image_my_estate_trading.png" alt="이미지" />
            <div>
              {lordDID === user.walletAddress.toLowerCase() ? '임대' : '임차'}
            </div>
          </c.IconContainer>
          <c.InfoContainer>
            <div className="amount">
              {convertKlayToKRW(convertBigNumber(contractInfo.deposit._hex))}{' '}
            </div>
            <div className="address">{realEstateInfoData.roadNameAddress}</div>
          </c.InfoContainer>
        </div>
        <c.DetailBtnContainer onClick={() => setShowContract(!showContract)}>
          <div className="detail">계약서 보기</div>
          <img
            className="arrow-icon"
            src="/icon/icon_vertical_arrow.png"
            alt="화살표"
          />
        </c.DetailBtnContainer>
      </c.MyEstateCardContainer>
      {/* <c.DetailCard>
        <div>계약 상세 내용</div>
        <div>부동산 DID {getDIDValue(contractInfo.propertyDID)}</div>
        <div>계약상대 DID {getDIDValue(contractInfo.tenantDID)}</div>
        <div>
          {lordDID === user.walletAddress ? '임대' : '임차'} 기간 :{' '}
          {contractInfo.leasePeriod}
          1000000000000000000
        </div>
        <div>
          보증금, 월세 {convertBigNumber(contractInfo.deposit._hex)} KLAY
        </div>
        <div>계약날짜 {contractInfo.contractDate}</div>
        <div>계약조건 {contractInfo.terms}</div>
      </c.DetailCard> */}
      {showContract && (
        <c.ModalOverlay onClick={() => setShowContract(false)}>
          {/* <c.DetailCard onClick={e => e.stopPropagation()}> */}
          <ContractDetailCard
            contractInfo={contractInfo}
            estateInfo={realEstateInfoData}
            setShowContract={setShowContract}
          />
          {/* </c.DetailCard> */}
        </c.ModalOverlay>
      )}
    </c.InfoWrapper>
  )
}

export default ContractInfoCard
