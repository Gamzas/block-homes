import {
  IntroPageContainer,
  NotSignInButton,
  SignInButton,
} from '@pages/style/IntroPageStyle'
import Intro from '@components/IntroPage/Intro'
import WaveContainer from '@common/WaveContainer'
import { useNavigate } from 'react-router-dom'

const IntroPage = () => {
  const navigate = useNavigate()
  const handleSignInButtonClick = () => {
    navigate('/signin')
  }
  return (
    <IntroPageContainer>
      <WaveContainer />
      <Intro />

      <SignInButton onClick={handleSignInButtonClick}>
        간편 본인 인증
      </SignInButton>
      <NotSignInButton onClick={() => navigate('/')}>
        둘러 보기만 할게요.
      </NotSignInButton>
    </IntroPageContainer>
  )
}

export default IntroPage
