import * as i from '@common/style/InfoPageHeaderStyle'
import React from 'react'

interface InfoPageHeaderProps {
  backgroundImageSrc: string
  questionTitle: string
}

const InfoPageHeader = (InfoPageHeaderProps: InfoPageHeaderProps) => {
  const createMarkup = (htmlString: string) => {
    return { __html: htmlString }
  }

  return (
    <i.InfoPageHeaderContainer>
      <div className="question-logo">Q</div>
      <img
        className="background-image"
        alt="배경이미지"
        src={InfoPageHeaderProps.backgroundImageSrc}
      />
      <div
        className="question-title"
        dangerouslySetInnerHTML={createMarkup(
          InfoPageHeaderProps.questionTitle,
        )}
      ></div>
    </i.InfoPageHeaderContainer>
  )
}

export default InfoPageHeader
