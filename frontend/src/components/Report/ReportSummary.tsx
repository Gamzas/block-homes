import Gauge from './Gauge'
import { SummaryContainer } from './style/ReportSummaryStyle'

type Props = { falseCount?: any }

const ReportSummary = (props: Props) => {
  console.log(props.falseCount)
  return (
    <SummaryContainer>
      <div className="check-text">
        {props.falseCount}/5
        <p>확인 내용</p>
      </div>
      <Gauge steps={props.falseCount} />
      <div className="check-text">
        적정
        <p>보증금</p>
      </div>
    </SummaryContainer>
  )
}

export default ReportSummary
