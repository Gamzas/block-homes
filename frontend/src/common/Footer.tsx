import * as f from '@common/style/FooterStyle'
import { FooterComponentType } from '@/types/components/footerType'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()

  const FooterComponentList: FooterComponentType[] = [
    {
      title: '홈',
      iconSrc: '/icon/icon_footer_home.png',
      routePath: '/',
    },
    {
      title: '관심 매물',
      iconSrc: '/icon/icon_footer_heart.png',
      routePath: '/likes',
    },
    // 임시 smart-contract 설정
    {
      title: '채팅',
      iconSrc: '/icon/icon_footer_chat.png',
      routePath: '/smart-contract',
    },
    {
      title: '마이페이지',
      iconSrc: '/icon/icon_footer_mypage.png',
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
