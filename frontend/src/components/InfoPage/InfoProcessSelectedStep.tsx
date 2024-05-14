import * as i from '@components/InfoPage/style/InfoProcessSelectedStepStyle'
import { TRANSACTION_PROCESS_STEP_DATA } from '@constants/TransactionProcessData'

const InfoProcessSelectedStep = ({
  selectedProcessIndex,
  setSelectedProcessIndex,
}) => {
  const selectedStepData = TRANSACTION_PROCESS_STEP_DATA[selectedProcessIndex]

  const handleNext = () => {
    if (selectedProcessIndex < TRANSACTION_PROCESS_STEP_DATA.length - 1) {
      setSelectedProcessIndex(selectedProcessIndex + 1)
    }
  }

  const handlePrev = () => {
    if (selectedProcessIndex > 0) {
      setSelectedProcessIndex(selectedProcessIndex - 1)
    }
  }

  const createMarkup = htmlString => {
    return { __html: htmlString }
  }

  return (
    <i.InfoProcessSelectedStepContainer>
      <img
        className="left-arrow"
        src="/icon/icon_puple_arrow.png"
        alt="왼쪽"
        onClick={handlePrev}
      />
      <i.InfoProcessSelectedStepContent>
        <div className="icon-container">
          <img src={selectedStepData.src} alt={selectedStepData.title} />
        </div>

        <div
          className="detail-container"
          dangerouslySetInnerHTML={createMarkup(selectedStepData.detail)}
        />
      </i.InfoProcessSelectedStepContent>
      <img
        className="right-arrow"
        src="/icon/icon_puple_arrow.png"
        alt="오른쪽"
        onClick={handleNext}
      />
    </i.InfoProcessSelectedStepContainer>
  )
}

export default InfoProcessSelectedStep
