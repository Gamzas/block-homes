import { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { userAtom } from '@/stores/atoms/userStore'
import { getContractInfo } from '@/abi/userSmartContract/getContractInfo'
import { useGetRealEstateInfo } from '@/abi/realEstateInfo/getRealEstateInfo'
import { getDIDValue } from '@/utils/didUtils'
import ItemLoading from '@/common/ItemLoading'
import * as c from '@components/MyContractpage/style/ContractInfoCardStyle'
import { LeaseContractType } from '@/types/components/ContractType'
import { convertBigNumber } from '@/utils/conversionUtils'

interface PropsType {
  contractAddress: string
}

const ContractInfoCard = ({ contractAddress }: PropsType) => {
  const [user] = useAtom(userAtom)
  const [contractInfo, setContractInfo] = useState<LeaseContractType | null>(
    null,
  )
  console.log(contractInfo)
  const [propertyDID, setPropertyDID] = useState<string | null>(null)

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

  const { data: realEstateInfoData, isLoading: realEstateLoading } =
    useGetRealEstateInfo(propertyDID || '')

  if (!contractInfo || realEstateLoading) {
    return <ItemLoading />
  }

  const lordDID = getDIDValue(contractInfo.landlordDID)

  return (
    <c.InfoWrapper>
      <c.MyEstateCardContainer>
        <div className="info-wrapper">
          <c.IconContainer>
            <img src="/image/image_my_estate_trading.png" alt="이미지" />
            <div>{lordDID === user.walletAddress ? '임대' : '임차'}</div>
          </c.IconContainer>
          <c.InfoContainer>
            <div className="amount">
              {convertBigNumber(contractInfo.deposit._hex)} KLAY
            </div>
            <div className="address">{realEstateInfoData.roadNameAddress}</div>
          </c.InfoContainer>
        </div>
        <c.DetailBtnContainer>
          <div className="detail">매물 상세 정보</div>
          <img
            className="arrow-icon"
            src="/icon/icon_vertical_arrow.png"
            alt="화살표"
          />
        </c.DetailBtnContainer>
      </c.MyEstateCardContainer>
      <c.DetailCard>
        <div>계약 상세 내용</div>
        <div>부동산 DID {getDIDValue(contractInfo.propertyDID)}</div>
        <div>계약상대 DID {getDIDValue(contractInfo.tenantDID)}</div>
        <div>
          {lordDID === user.walletAddress ? '임대' : '임차'} 기간 :{' '}
          {contractInfo.leasePeriod}
        </div>
        <div>
          보증금, 월세 {convertBigNumber(contractInfo.deposit._hex)} KLAY
        </div>
        <div>계약날짜 {contractInfo.contractDate}</div>
        <div>계약조건 {contractInfo.terms}</div>
      </c.DetailCard>
    </c.InfoWrapper>
  )
}

export default ContractInfoCard
