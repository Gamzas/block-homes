import * as e from '@components/CheckDidPage/style/EmptyEstateDidCardStyle'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { animated, useSpring } from 'react-spring'

const EmptyEstateDidCard = ({ index, currentCenterIndex }) => {
  const navigate = useNavigate()

  const [show, setShown] = useState(false)
  const checkEstateDid = () => {
    if (index === currentCenterIndex) navigate('/check-did')
  }

  const springStyle = useSpring({
    opacity: 1,
    transform: show ? 'scale(1.03)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
    borderRadius: '1.5rem',
  })

  return (
    <animated.div
      style={springStyle}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onClick={checkEstateDid}
    >
      <e.EmptyEstateDidCardContainer>
        <div className="plus-container">
          <div className="plus">+</div>
        </div>
      </e.EmptyEstateDidCardContainer>
    </animated.div>
  )
}

export default EmptyEstateDidCard
