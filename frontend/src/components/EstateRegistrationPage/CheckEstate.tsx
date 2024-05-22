import { CheckEstateContainer } from '@components/EstateRegistrationPage/style/CheckEstateStyle'
import { getRealEstateType } from '@/utils/estateTransferUtil'
import { formatDateToKoreanTime } from '@/utils/formatDateToKoreanTime'

const CheckEstate = checkEstateProps => {
  const categories = [
    { title: '주소', detail: checkEstateProps.roadNameAddress },
    { title: '소유자', detail: checkEstateProps.name },
    {
      title: '주택유형',
      detail: getRealEstateType(checkEstateProps.realEstateType),
    },
    { title: '면적', detail: checkEstateProps.area.toString() },
    {
      title: '등록일자',
      detail: formatDateToKoreanTime(checkEstateProps.date),
    },
  ]

  return (
    <div>
      {categories.map((item, index) => (
        <CheckEstateContainer key={index}>
          <div className="title">{item.title}</div>
          <div className="detail">{item.detail}</div>
        </CheckEstateContainer>
      ))}
    </div>
  )
}

export default CheckEstate
