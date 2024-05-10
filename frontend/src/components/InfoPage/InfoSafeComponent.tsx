import React from 'react'
import * as i from '@components/InfoPage/style/InfoSafeComponentStyle'

interface InfoSafeComponentProps {
  title: string
  content: string
  index: number
}

const InfoSafeComponent: React.FC<InfoSafeComponentProps> = ({
  title,
  content,
  index,
}) => {
  const createMarkup = (htmlString: string) => {
    return { __html: htmlString }
  }
  return (
    <i.InfoSafeComponentContainer>
      <i.InfoTitleContainer>
        <div className="index">{index + 1}</div>
        <div
          className="info-title"
          dangerouslySetInnerHTML={createMarkup(title)}
        />
      </i.InfoTitleContainer>

      <i.InfoContentContainer
        className="info-content"
        dangerouslySetInnerHTML={createMarkup(content)}
      />
    </i.InfoSafeComponentContainer>
  )
}

export default InfoSafeComponent
