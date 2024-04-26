import * as c from '@components/EstateList/styles/CustomOverlayStyle'

interface PropsType {
  condition : string
}

const CustomOverlay = (props : PropsType) => {
  const {condition} = props

  // switch
  return (
    <div>
      <c.EstateItem>
        <div className="circle">
          <div className="inner-circle">
            <span className="estate-sign">보통</span>
          </div>
        </div>
      </c.EstateItem>
    </div>
  )
}

export default CustomOverlay
