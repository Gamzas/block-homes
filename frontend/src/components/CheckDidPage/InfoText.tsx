import * as i from '@components/CheckDidPage/style/InfoTextStyle'
import { InfoTextPropsType } from '@/types/components/CheckDidInputTextType'

const InfoText = (InfoTextProps: InfoTextPropsType) => {
  const { largeText1, highlightText, largeText2, smallText } = InfoTextProps
  return (
    <div>
      <i.InfoTextContainer>
        <div className='info-text-large'>{largeText1}</div>
        <div className='info-text-highlight'>{highlightText}</div>
        <div className='info-text-large'>{largeText2}</div>
        <div className='info-text-small'>{smallText}</div>
      </i.InfoTextContainer>
    </div>
  )
}

export default InfoText