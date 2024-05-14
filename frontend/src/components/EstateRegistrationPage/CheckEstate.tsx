import { CheckEstateContainer } from '@components/EstateRegistrationPage/style/CheckEstateStyle'

const CheckEstate = (checkEstateProps) => {
  const categories = [
    { title: '주소', detail: checkEstateProps.roadNameAddress },
    { title: '소유자', detail: '박싸피' },
    { title: '주택유형', detail: '아파트' },
    { title: '면적', detail: checkEstateProps.area.toString() },
    { title: '등록일자', detail: '2020년 2월 1일' },
    { title: '계약상태', detail: '계약중' },
    { title: '계약기간', detail: '2023년 7월 5일 ~ 2024년 7월 5일' },
  ]

  return (
    <div>
      {categories.map((item, index) => (
        <CheckEstateContainer key={index}>
          <div className="title">
            {item.title}
          </div>
          <div className="detail">
            {item.detail}
          </div>
        </CheckEstateContainer>))}
    </div>
  )
}

export default CheckEstate
