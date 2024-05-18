import Lottie from 'react-lottie'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import { useNavigate } from 'react-router-dom'
import * as e from '@components/EstateRegistrationPage/style/EstateRegistrationCompleteStyle'
import House from '@assets/lotties/House.json'

const EstateRegistrationComplete = () => {
  const navigate = useNavigate()
  const hadleHome = () => {
    navigate('/')
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: House,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <e.EstateRegistrationCompleteContainer>
      <div className="lottie-container">
        <Lottie options={defaultOptions} height={350} width={350} />
      </div>
      <div className="complete-text">매물 등록이 완료되었습니다</div>
      <div className="button-box">
        <CustomButtonStyle onClick={hadleHome}>등록 완료</CustomButtonStyle>
      </div>
    </e.EstateRegistrationCompleteContainer>
  )
}

export default EstateRegistrationComplete
