import * as t from '@components/MainPage/style/TopCardStyle'

const TopCard = () => {
  return (
    <t.TopCardContainer>
      <t.TopCardHeader>
        <image className="logo">로고</image>
        <button className="loginBtn">로그인</button>
      </t.TopCardHeader>
    </t.TopCardContainer>
  )
}

export default TopCard
