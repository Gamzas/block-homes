import * as c from '@pages/style/CheckDidPageStyle'
import InfoText from '@components/CheckDidPage/InfoText'

const CheckDidPage = () => {

  const textProps = {
    largeText1: '블록체인 기술을 이용하여',
    highlightText: '부동산 정보',
    largeText2: '를 조회해 오는 중입니다.',
    smallText: '조금만 더 기달려 주세요!',
  }

  return (
    <c.CheckDidPageContainer>
      <InfoText {...textProps} />
    </c.CheckDidPageContainer>
  )
}

export default CheckDidPage