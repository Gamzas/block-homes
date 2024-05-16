import Intro from '@components/IntroPage/Intro'
import WaveContainer from '@common/WaveContainer'
import { TestPageContainer } from '@pages/style/TestPageStyle'

const TestPage = () => {
  return (
    <TestPageContainer>
      <WaveContainer />
      <Intro />
    </TestPageContainer>
  )
}

export default TestPage
