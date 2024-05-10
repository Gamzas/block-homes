import TextWithBold from '@/hooks/useTextBold'
import { ProcessDetailContainer } from './style/ProcessDetailStyle'
type Props = {
  title: string
  content: string
  currentStep: number
  stepIndex: number
}

const ProcessDetail = (props: Props) => {
  return (
    <ProcessDetailContainer
      currentStep={props.currentStep}
      stepIndex={props.stepIndex}
    >
      <div className="title-box">
        <TextWithBold text={props.title} />
      </div>
      <div className="content-box">
        <TextWithBold text={props.content} />
      </div>
    </ProcessDetailContainer>
  )
}

export default ProcessDetail
