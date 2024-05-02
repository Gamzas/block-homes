import * as e from '@components/CheckDidPage/style/EmptyEstateDidCardStyle'
import { useNavigate } from 'react-router-dom'

const EmptyEstateDidCard = () => {
  const navigate = useNavigate()
  const checkEstateDid = () => navigate('/check-did')

  return (
    <e.EmptyEstateDidCardContainer>
      <div className="plus-container" onClick={checkEstateDid}>
        <div className="plus">+</div>
      </div>
    </e.EmptyEstateDidCardContainer>
  )
}

export default EmptyEstateDidCard
