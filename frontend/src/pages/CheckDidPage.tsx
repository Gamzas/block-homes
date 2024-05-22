import Lottie from 'react-lottie'
import * as c from '@pages/style/CheckDidPageStyle'
import InfoText from '@components/CheckDidPage/InfoText'
import CheckDidCardLoading from '@assets/lotties/CheckDidCardLoading.json'
import WaveContainer from '@common/WaveContainer'

const CheckDidPage = () => {
  const textProps = {
    largeText1: '블록체인 기술을 이용하여',
    highlightText: '부동산 정보',
    largeText2: '를 조회해 오는 중입니다.',
    smallText: '조금만 더 기달려 주세요!',
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CheckDidCardLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <c.CheckDidPageContainer>
      <InfoText {...textProps} />
      <div className="lottie-container">
        <Lottie options={defaultOptions} height={350} width={350} />
      </div>
      <WaveContainer />
    </c.CheckDidPageContainer>
  )
}

export default CheckDidPage
