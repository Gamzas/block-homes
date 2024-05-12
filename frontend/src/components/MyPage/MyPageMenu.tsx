import * as m from '@components/MyPage/style/MyPageMenuStyle'
import { useNavigate } from 'react-router-dom'

const MyPageMenu = () => {
  const navigate = useNavigate()
  const menuArr = ['내가 등록한 매물', '서비스 소개']
  const address = ['/myestate', '/info-how-safe']
  const goMenu = (index: number) => {
    navigate(`${address[index]}`)
  }
  return (
    <>
      <m.EmptyContainer />
      <m.MenuContainer>
        {menuArr.map((menu, index) => (
          <>
            <div className="menu" key={index} onClick={() => goMenu(index)}>
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
