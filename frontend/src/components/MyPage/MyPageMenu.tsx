import * as m from '@components/MyPage/style/MyPageMenuStyle'

const MyPageMenu = () => {
  const menuArr = ['내가 등록한 매물', '서비스 소개']
  return (
    <>
      <m.EmptyContainer />
      <m.MenuContainer>
        {menuArr.map((menu, index) => (
          <>
            <div className="menu" key={index}>
              {menu}
              <img
                className="arrow-icon"
                src="icon/icon_back_arrow.png"
                alt=""
              />
            </div>
          </>
        ))}
      </m.MenuContainer>
      <m.EmptyContainer />
    </>
  )
}

export default MyPageMenu
