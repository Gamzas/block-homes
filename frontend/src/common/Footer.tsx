import * as f from '@common/style/FooterStyle'
import { FooterComponentType } from '@/types/footer'

const Footer = () => {
  const FooterComponentList: FooterComponentType[] = [
    {
      title: '홈',
      iconSrc: 'public/icon/icon_footer_home.png',
    },
    {
      title: '관심 목록',
      iconSrc: 'public/icon/icon_footer_heart.png',
    },
    {
      title: '채팅',
      iconSrc: 'public/icon/icon_footer_chat.png',
    },
    {
      title: '마이페이지',
      iconSrc: 'public/icon/icon_footer_mypage.png',
    },
  ]

  return <f.Container>FOOTER</f.Container>
}

export default Footer
