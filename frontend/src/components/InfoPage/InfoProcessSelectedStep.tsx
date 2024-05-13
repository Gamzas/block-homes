import * as i from '@components/InfoPage/style/InfoProcessSelectedStepStyle'
import { TRANSACTION_PROCESS_STEP_DATA } from '@constants/TransactionProcessData'

const InfoProcessSelectedStep = ({ selectedProcessIndex }) => {
  const selectedStepData = TRANSACTION_PROCESS_STEP_DATA[selectedProcessIndex]

  const createMarkup = (htmlString: string) => {
    return { __html: htmlString }
  }

  return (
    <i.InfoProcessSelectedStepContainer>
      <img className="left-arrow" src="/icon/icon_puple_arrow.png" alt="왼쪽" />
      <i.InfoProcessSelectedStepContent>
        <div className="icon-container">
          <img src={selectedStepData.src} alt={selectedStepData.title} />
        </div>
        <div
          className="detail-container"
          dangerouslySetInnerHTML={createMarkup(selectedStepData.detail)}
        ></div>
      </i.InfoProcessSelectedStepContent>
      <img
        className="right-arrow"
        src="/icon/icon_puple_arrow.png"
        alt="오른쪽"
      />
    </i.InfoProcessSelectedStepContainer>
  )
}

export default InfoProcessSelectedStep
