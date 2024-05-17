import Lottie from 'react-lottie'
import WaveContainer from '@common/WaveContainer'
import {
  IsLoadingContainer,
  IsLoadingInfoText,
} from '@common/style/IsLoadingStyle'

const parseText = text => {
  const lines = text.split('\n').map((line, i) => {
    const elements = []
    let currentIndex = 0

    while (currentIndex < line.length) {
      if (line.indexOf('**', currentIndex) === currentIndex) {
        const endIndex = line.indexOf('**', currentIndex + 2)
        if (endIndex !== -1) {
          elements.push(
            <span key={`${i}-highlight`} className="info-text-highlight">
              {line.substring(currentIndex + 2, endIndex)}
            </span>,
          )
          currentIndex = endIndex + 2
          continue
        }
      }

      if (line.indexOf('_', currentIndex) === currentIndex) {
        const endIndex = line.indexOf('_', currentIndex + 1)
        if (endIndex !== -1) {
          elements.push(
            <span key={`${i}-small`} className="info-text-small">
              {line.substring(currentIndex + 1, endIndex)}
            </span>,
          )
          currentIndex = endIndex + 1
          continue
        }
      }

      // 다음 특별 문자 위치 찾기
      const nextHighlightIndex = line.indexOf('**', currentIndex)
      const nextSmallIndex = line.indexOf('_', currentIndex)
      let nextSpecialCharIndex = line.length

      if (
        nextHighlightIndex !== -1 &&
        nextHighlightIndex < nextSpecialCharIndex
      ) {
        nextSpecialCharIndex = nextHighlightIndex
      }
      if (nextSmallIndex !== -1 && nextSmallIndex < nextSpecialCharIndex) {
        nextSpecialCharIndex = nextSmallIndex
      }

      elements.push(
        <span key={`${i}-text-${currentIndex}`} className="info-text-large">
          {line.substring(currentIndex, nextSpecialCharIndex)}
        </span>,
      )
      currentIndex = nextSpecialCharIndex
    }

    return <div key={i}>{elements}</div>
  })

  return lines
}

const IsLoading = ({ lottieProps, textProps }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieProps,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <IsLoadingContainer>
      <WaveContainer />
      <IsLoadingInfoText>{parseText(textProps)}</IsLoadingInfoText>
      <div className="lottie-container">
        <Lottie options={defaultOptions} height={350} width={350} />
      </div>
    </IsLoadingContainer>
  )
}

export default IsLoading
