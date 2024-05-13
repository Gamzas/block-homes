import InfoSelectedProcessComponent from '@components/InfoPage/InfoSelectedProcessComponent'
import { useState } from 'react'
import { TRANSACTION_PROCESS_STEP_DATA } from '@constants/TransactionProcessData'

const InfoProcessContent = () => {
  const [selectedProcessIndex, setSelectedProcessIndex] = useState(0)

  return (
    <div>
      <InfoSelectedProcessComponent
        selectedProcessIndex={selectedProcessIndex}
      />
      {TRANSACTION_PROCESS_STEP_DATA.map((transactionStep, index) => (
        <img
          src={transactionStep.src}
          alt={transactionStep.title}
          key={index}
        />
      ))}
    </div>
  )
}

export default InfoProcessContent
