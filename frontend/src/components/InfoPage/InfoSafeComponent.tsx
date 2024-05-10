import React from 'react'
import * as i from '@components/InfoPage/style/InfoSafeComponentStyle'

const InfoSafeComponent = () => {
  return (
    <i.InfoSafeComponentContainer>
      <i.InfoTitleContainer>
        <div className="index">1</div>
        <div className="info-title">
          스마트컨트랙트를 활용한 거래 자동화 시스템 구축
        </div>
      </i.InfoTitleContainer>
      <i.InfoContentContainer className="info-content">
        거래가 정해진 조건을 만족할 때 (거래자 양측이 모두 서명했을 경우)에만
        실행되도록 설계되어있습니다. 계약이 완료될 경우 매수자에게 모든 권한이
        위임되고 이는 블록체인에 기록 됩니다.
      </i.InfoContentContainer>
    </i.InfoSafeComponentContainer>
  )
}

export default InfoSafeComponent
