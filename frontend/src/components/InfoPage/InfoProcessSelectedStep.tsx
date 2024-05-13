import { InfoProcessSelectedStepContainer } from '@components/InfoPage/style/InfoProcessSelectedStepStyle'

const InfoProcessSelectedStep = ({ selectedProcessIndex }) => {
  return (
    <InfoProcessSelectedStepContainer>
      {selectedProcessIndex}
    </InfoProcessSelectedStepContainer>
  )
}

export default InfoProcessSelectedStep
