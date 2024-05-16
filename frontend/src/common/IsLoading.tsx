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
      if (line.startsWith('**', currentIndex)) {
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

      if (line.startsWith('_', currentIndex)) {
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

      elements.push(
        <span key={`${i}-large`} className="info-text-large">
          {line[currentIndex]}
        </span>,
      )
      currentIndex++
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

  // **이것은 하이라이트 텍스트입니다.**
  // 이 텍스트는 줄바꿈이 가능합니다.
  // _이것은 작은 텍스트입니다._

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
