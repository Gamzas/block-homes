import * as f from '@common/style/FooterStyle'
import { FooterComponentType } from '@/types/components/footerType'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const FooterComponentList: FooterComponentType[] = [
    {
      title: '홈',
      iconSrc: 'public/icon/icon_footer_home.png',
      routePath: '/',
    },
    {
      title: '관심 매물',
      iconSrc: 'public/icon/icon_footer_heart.png',
      routePath: '/likes',
    },
    {
      title: '채팅',
      iconSrc: 'public/icon/icon_footer_chat.png',
      routePath: '/chat',
    },
    {
      title: '마이페이지',
      iconSrc: 'public/icon/icon_footer_mypage.png',
      routePath: '/mypage',
    },
  ]

  const navigateTo = (link: string) => {
    navigate(link)
  }

  return (
    <f.FooterContainer>
      {FooterComponentList.map((footerComponent, index) => (
        <f.FooterComponent
          key={index}
          onClick={() => navigateTo(footerComponent.routePath)}
        >
          <img
            className="footer-component-icon"
            alt={`${footerComponent.title}`}
            src={`${footerComponent.iconSrc}`}
          />
          {footerComponent.title}
        </f.FooterComponent>
      ))}
    </f.FooterContainer>
  )
}

export default Footer
