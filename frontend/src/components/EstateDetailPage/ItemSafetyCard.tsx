import useEstateCondition from '@/hooks/useEstateCondition'
import * as i from '@components/EstateDetailPage/style/ItemSafetyCardStyle'

interface PropsType {
  condition: string
}
const ItemSafetyCard = (props: PropsType) => {
  const condition = props.condition
  console.log(condition)
  const { getColor, getStatus } = useEstateCondition(condition)
  const mainColor = getColor()?.main
  const secondColor = getColor()?.second
  const thirdColor = getColor()?.third
  const fourthColor = getColor()?.fourth
  const status = getStatus()
  return (
    <i.CardWrapper>
      <i.SafetyCardContainer $color={fourthColor}>
        <i.WaveContainer>
          <div className="back-wrapper">
            <svg
              className="bigWave"
              xmlns="http://www.w3.org/2000/svg"
              width="354"
              height="65"
              viewBox="0 0 367 65"
              fill="none"
            >
              <path
                d="M109.427 0.0368644C31.4679 1.32966 -16.0073 17.3819 -30 25.2464V65H449V14.5809C435.507 19.3666 431.199 45.9584 362.235 48.2208C293.271 50.4832 206.876 -1.57913 109.427 0.0368644Z"
                fill={thirdColor}
              />
            </svg>
            <svg
              className="smallWave"
              xmlns="http://www.w3.org/2000/svg"
              width="354"
              height="40"
              viewBox="0 0 367 40"
              fill="none"
            >
              <path
                d="M144.431 0.558797C66.5006 1.40412 5.74038 27.645 -8.24707 32.7874V41.3588H470.573V24.5588C457.085 27.6881 451.345 28.5652 382.407 30.0445C313.469 31.5238 241.843 -0.497861 144.431 0.558797Z"
                fill={secondColor}
              />
            </svg>
          </div>
        </i.WaveContainer>
        <i.ImgContainer>
          <img
            className="alert-img"
            src={`/image/image_card_${condition}.png`}
            alt="위험도 아이콘"
          />
          <img
            className="pig-img"
            src="/image/image_alertPig.png"
            alt="알려주는돼지"
          />
        </i.ImgContainer>
        <i.InfoTextContainer $color={mainColor}>
          <div className="txt">
            해당 매물의 안전도는&nbsp;
            <span className="info">{status}</span>
            &nbsp;입니다.
          </div>
        </i.InfoTextContainer>
        <i.ReportBtnContainer>
          <div className="icon-container">
            <img
              className="report-icon"
              src="/icon/icon_safety_card_report.png"
              alt="report아이콘"
            />
            <div className="info-text">자세한 안전 레포트 보러가기</div>
            <img
              className="right-icon"
              src="/icon/icon_safety_card_right_arrow.png"
              alt="화살표아이콘"
            />
          </div>
        </i.ReportBtnContainer>
      </i.SafetyCardContainer>
    </i.CardWrapper>
  )
}

export default ItemSafetyCard
