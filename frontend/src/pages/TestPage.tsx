import WaveContainer from '@common/WaveContainer'
import { TestPageContainer } from '@pages/style/TestPageStyle'
import Test from '@components/TestPage/test'

const TestPage = () => {
  return (
    <TestPageContainer>
      <WaveContainer />
      <Test />
    </TestPageContainer>
  )
}

export default TestPage
