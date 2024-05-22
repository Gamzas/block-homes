import ExampleGraph from './ExampleGraph'
import ReportWave from '../ReportWaveContainer'
import { DepositGraphContainer } from '../style/DepositGraphStyle'

const ExampleDepositGraph = () => {
  return (
    <DepositGraphContainer>
      <ReportWave />
      <ExampleGraph />
    </DepositGraphContainer>
  )
}

export default ExampleDepositGraph
