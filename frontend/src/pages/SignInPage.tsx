import { SignInPageContainer } from '@pages/style/SignInPageStyle'
import SignIn from '@components/SignInPage/SignIn'
import WaveContainer from '@common/WaveContainer'

const SignInPage = () => {
  return (
    <SignInPageContainer>
      <WaveContainer />
      <SignIn />
    </SignInPageContainer>
  )
}

export default SignInPage
