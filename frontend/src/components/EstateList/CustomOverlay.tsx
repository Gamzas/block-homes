import * as c from '@components/EstateList/styles/CustomOverlayStyle'

interface PropsType {
  condition: number
}

const CustomOverlay = (props: PropsType) => {
  const { condition } = props

  const getEstateCondition = (condition: number) => {
    switch (condition) {
      case 1:
        return '우수'
      case 2:
        return '보통'
      case 3:
        return '위험'
    }
  }

  // switch
  return (
    <c.EstateItem $condition={condition}>
      <div className="circle">
        <div className="inner-circle">
          <span className="estate-sign">{getEstateCondition(condition)}</span>
        </div>
      </div>
    </c.EstateItem>
  )
}

export default CustomOverlay
