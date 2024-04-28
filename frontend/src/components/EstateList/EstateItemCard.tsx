import useEstateCondition from '@/hooks/useEstateCondition'
import * as c from '@components/EstateList/styles/EstateItemCardStyle'

interface PropsType {
  condition: string
  address : string
  infos: string[]
  leaseType: string
  price: string
  roomSize: string
  roomCount: string
  createDate: string
}
const EstateItemCard = (props: PropsType) => {
  const {
    condition,
    address,
    infos,
    leaseType,
    price,
    roomSize,
    roomCount,
    createDate,
  } = props
  const { getColor, getStatus } = useEstateCondition(condition)
  const mainColor = getColor()?.main
  const secondColor = getColor()?.second
  const thirdColor = getColor()?.third
  const fourthColor = getColor()?.fourth
  const status = getStatus()
  return (
    <>
      <c.ItemCardContainer $color={fourthColor}>
        <c.LocationContainer $color={mainColor}>
          <svg
            className="location-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="11"
            viewBox="0 0 9 11"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.5 10.3567L4.86808 9.94192C5.28575 9.46358 5.66142 9.00975 5.99567 8.57808L6.27158 8.21408C7.42367 6.66183 8 5.42983 8 4.51925C8 2.57558 6.43317 1 4.5 1C2.56683 1 1 2.57558 1 4.51925C1 5.42983 1.57633 6.66183 2.72842 8.21408L3.00433 8.57808C3.48117 9.18906 3.98006 9.78193 4.5 10.3567Z"
              stroke={mainColor}
              stroke-width="0.583333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.49984 5.95866C5.30525 5.95866 5.95817 5.30574 5.95817 4.50033C5.95817 3.69491 5.30525 3.04199 4.49984 3.04199C3.69442 3.04199 3.0415 3.69491 3.0415 4.50033C3.0415 5.30574 3.69442 5.95866 4.49984 5.95866Z"
              stroke={mainColor}
              stroke-width="0.583333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="location-text">{address}</div>
        </c.LocationContainer>
        <c.ItemImage src="https://i0.wp.com/www.gangnamapt.com/wp-content/uploads/2023/01/20230105_180953_HDR.jpg?resize=480%2C360" />
        <c.ItemStatusContainer>
          <svg
            className="polygon"
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="56"
            viewBox="0 0 41 56"
            fill="none"
          >
            <path
              d="M22.6829 54.5285C21.3557 55.6169 19.4447 55.6169 18.1175 54.5285L1.91748 41.2442C1.08361 40.5604 0.600197 39.5389 0.600197 38.4605V3.60038C0.600197 1.61216 2.21197 0.000389099 4.2002 0.000389099H36.6002C38.5884 0.000389099 40.2002 1.61216 40.2002 3.60039V38.4605C40.2002 39.5389 39.7168 40.5604 38.8829 41.2442L22.6829 54.5285Z"
              fill={mainColor}
            />
          </svg>
          <p className="status-title">{status}</p>
        </c.ItemStatusContainer>
        <c.ItemInfoContainer $color={mainColor}>
          {infos.map(item => (
            <div className="info-box">{item}</div>
          ))}
        </c.ItemInfoContainer>
        <c.ItemPriceInfoContainer>
          <div className="price-text">
            {leaseType} {price}
          </div>
          <div className="info-text">
            {roomSize} m2 / {roomCount}
          </div>
          <div className="info-text">6층</div>
          <div className="info-text">등록일자 {createDate}</div>
        </c.ItemPriceInfoContainer>
        <c.BackgroundContainer>
          <svg
            className="big-wave"
            xmlns="http://www.w3.org/2000/svg"
            width="356"
            height="62"
            viewBox="0 0 356 62"
            fill="none"
          >
            <path
              d="M108.197 0.0351526C32.6032 1.26792 -13.4318 16.5748 -27 24.0741V61.9817H437.469V13.9038C424.385 18.4673 420.208 43.8243 353.336 45.9817C286.464 48.139 202.69 -1.50581 108.197 0.0351526Z"
              fill={thirdColor}
            />
          </svg>
          <svg
            className="small-wave"
            xmlns="http://www.w3.org/2000/svg"
            width="356"
            height="60"
            viewBox="0 0 356 60"
            fill="none"
          >
            <path
              d="M146.102 0.48166C70.5073 1.71443 11.5682 39.9823 -2 47.4816V59.9816H462.469V35.4817C449.385 40.0452 443.817 41.3243 376.945 43.4817C310.073 45.639 240.594 -1.0593 146.102 0.48166Z"
              fill={secondColor}
            />
          </svg>
        </c.BackgroundContainer>
      </c.ItemCardContainer>
    </>
  )
}

export default EstateItemCard
