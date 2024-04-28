import * as c from '@components/EstateList/styles/CustomOverlayStyle'

interface PropsType {
  condition: string
}

const CustomOverlay = (props: PropsType) => {
  const { condition } = props

  const getEstateCondition = (condition : string) => {
    switch (condition) {
      case 'good':
        return '우수'
      case 'normal':
        return '보통'
      case 'bad':
        return '위험'
    }
  }

  // switch
  return (
    <div>
      <c.EstateItem $condition={condition}>
        <div className="circle">
          <div className="inner-circle">
            <span className="estate-sign">{getEstateCondition(condition)}</span>
          </div>
        </div>
      </c.EstateItem>
    </div>
  )
}

export default CustomOverlay
