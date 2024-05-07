import * as m from '@/components/MyPage/style/MenuListStyle'

const MenuList = () => {
  const menuArr = ['내 관심매물', '현재 계약중인 부동산']
  return (
    <m.MenuWrapper>
      <m.MenuContainer>
        {menuArr.map((menu, index) => (
          <div className="title-box">
            <div className="title" key={index}>
              {menu}
            </div>
            <img className="arrow-icon" src="icon/icon_back_arrow.png" alt="" />
          </div>
        ))}
      </m.MenuContainer>
    </m.MenuWrapper>
  )
}

export default MenuList
