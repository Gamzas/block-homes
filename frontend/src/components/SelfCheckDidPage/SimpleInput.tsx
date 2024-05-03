import * as s from '@components/SelfCheckDidPage/style/SimpleInputStyle'

interface SimpleInputPropsType {
  inputTextKorean: string
  inputTextEnglish: string
  placeholder: string
  unit: string | null
}

const SimpleInput = (props: SimpleInputPropsType) => {
  return (
    <s.SimpleInputContainer>
      <div className="input-title">{props.inputTextKorean}</div>
      <s.InputWrapper>
        <input className="simple-input" placeholder={props.placeholder} />
        <div className="unit"> {props.unit}</div>
      </s.InputWrapper>
    </s.SimpleInputContainer>
  )
}

export default SimpleInput
