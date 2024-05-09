import * as c from '@/components/MyPage/style/MemberCardStyle'

const MemberCard = () => {
  const userName = '김현지'
  return (
    <c.CardContainer>
      <img className="logo-img" src="image/image_logo.png" alt="로고" />
      <img className="house-img" src="image/image_house.png" alt="집" />
      <c.ProfileContainer>
        <div className="profile-box">
          <img
            className="profile-img"
            src="image/image_profile.png"
            alt="프로필 기본 이미지"
          />
        </div>
        <div className="user-name">
          {userName} <span>님</span>
        </div>
      </c.ProfileContainer>
    </c.CardContainer>
  )
}

export default MemberCard
