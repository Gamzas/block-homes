import React from 'react'
import { DepositGraphContainer } from './style/DepositGraphStyle'
import ReportWave from './ReportWaveContainer'
import Graph from './Graph'

const DepositGraph = () => {
  return (
    <DepositGraphContainer>
      <ReportWave />
      <Graph />
    </DepositGraphContainer>
  )
}

export default DepositGraph
