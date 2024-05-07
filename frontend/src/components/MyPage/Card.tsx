import * as c from '@components/MyPage/style/CardStyle'

const Card = () => {
  const userName = '김현지'
  return (
    <c.CardContainer>
      <div className='user-name'>{userName} 님</div>
      <img className='house-img' src="image/image_house.png" alt="집" />
    </c.CardContainer>
  );
};

export default Card;