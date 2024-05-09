import Lottie from 'react-lottie'
import { useParams } from 'react-router-dom'
import WaveContainer from '@common/WaveContainer'
import * as c from '@pages/style/CallBackPageStyle'
import ConnectWallet from '@assets/lotties/ConnectWallet.json'
import InfoText from '@components/CheckDidPage/InfoText'

const CallBackPage = () => {
  const params = useParams().result

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ConnectWallet,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <c.CallBackPageContainer>
      <div className="highlight">성공!</div>
      <div className="large">블록홈즈 앱으로 돌아가세요.</div>
      <div className="lottie-container">
        <Lottie options={defaultOptions} height={350} width={350} />
      </div>
      <WaveContainer />
    </c.CallBackPageContainer>
  )
}

export default CallBackPage
