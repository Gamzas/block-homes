import { useState } from 'react'
import { TRANSACTION_PROCESS_STEP_DATA } from '@constants/TransactionProcessData'
import InfoProcessSelectedStep from '@components/InfoPage/InfoProcessSelectedStep'

const InfoProcessContent = () => {
  const [selectedProcessIndex, setSelectedProcessIndex] = useState(0)

  return (
    <div>
      <InfoProcessSelectedStep
        selectedProcessIndex={selectedProcessIndex}
        setSelectedProcessIndex={setSelectedProcessIndex}
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
