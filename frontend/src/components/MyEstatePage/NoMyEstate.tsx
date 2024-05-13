import { userTypeAtom } from '@/stores/atoms/userStore'
import * as n from '@components/MyEstatePage/style/NoMyEstateStyle'
import { useSetAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'

const NoMyEstate = () => {
  const navigate = useNavigate()
  const setUserType = useSetAtom(userTypeAtom)
  const goRegister = () => {
    setUserType({ type: 1 })
    navigate('/')
  }
  return (
    <n.NoMyItemsContainer>
      <n.GuideContainer>
        <img className="house" src="/image/image_oneroom.png" alt="집ㅋㅎ" />
        <div className="guide-txt">등록한 매물이 없습니다</div>
      </n.GuideContainer>
      <n.RegisterBtnContainer onClick={goRegister}>
        <img
          className="btn-img"
          src="/image/image_VC_certification.png"
          alt=""
        />
        <div className="btn-txt">매물 등록하러 가기</div>
      </n.RegisterBtnContainer>
    </n.NoMyItemsContainer>
  )
}

export default NoMyEstate
