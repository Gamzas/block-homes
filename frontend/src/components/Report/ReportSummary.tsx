import Gauge from './Gauge'
import { SummaryContainer } from './style/ReportSummaryStyle'

const ReportSummary = ({ falseCount }) => {
  console.log(falseCount)
  return (
    <SummaryContainer>
      <div className="check-text">
        {falseCount}/5
        <p>확인 내용</p>
      </div>
      <Gauge steps={falseCount} />
      <div className="check-text">
        적정
        <p>보증금</p>
      </div>
    </SummaryContainer>
  )
}

export default ReportSummary
