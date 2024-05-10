import WaveContainer from '@/common/WaveContainer'
import { memberAtom } from '@/stores/atoms/userStore'
import * as l from '@components/MyPage/style/LoginStyle'
import { useSetAtom } from 'jotai'

const Login = () => {
  // DELETE 임시
  const setMember = useSetAtom(memberAtom)
  const goLogin = () => {
    setMember(true)
  }
  return (
    <l.LoginContainer>
      <l.WaveWrapper>
        <WaveContainer />
      </l.WaveWrapper>
      <l.LogoContainer>
        <img className="logo-img" src="image/image_logo.png" alt="로고" />
        <l.CharacterContainer>
          <img
            alt="메인 돼지 캐릭터"
            className="pig-character"
            src="/image/image_main_character.png"
          />
          <img
            alt="메인 돼지 모자"
            className="hat"
            src="/image/image_hat.png"
          />
          <img
            alt="돋보기 이미지"
            className="reading-glasses"
            src="/image/image_reading_glasses.png"
          />
        </l.CharacterContainer>
      </l.LogoContainer>
      <l.TextContainer>
        <div>로그인하고</div>
        <div>
          안전하고 쉬운 <span className="bold">부동산 거래를</span>
        </div>
        <div>시작해보세요!</div>
      </l.TextContainer>
      <l.BtnContainer onClick={goLogin}>
        <div className="login">로그인</div>
      </l.BtnContainer>
    </l.LoginContainer>
  )
}

export default Login
