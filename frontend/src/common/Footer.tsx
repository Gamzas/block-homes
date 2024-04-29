import * as f from '@common/style/FooterStyle'
import { FooterComponentType } from '@/types/footer'

const Footer = () => {
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

  return <f.Container>FOOTER</f.Container>
}

export default Footer
