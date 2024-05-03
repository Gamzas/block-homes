import ReportSummary from './ReportSummary'
import DepositGraph from './DepositGraph'
import DepositList from './DepositList'
import DangerList from './DangerList'

const ReportList = () => {
  return (
    <>
      <ReportSummary></ReportSummary>
      <DepositGraph></DepositGraph>
      <DepositList></DepositList>
      <DangerList></DangerList>
    </>
  )
}

export default ReportList
