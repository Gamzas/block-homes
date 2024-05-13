import * as n from '@components/MyEstatePage/style/NoMyEstateStyle'

const NoMyEstate = () => {
  return (
    <n.NoMyItemsContainer>
      <n.GuideContainer>
        <img className="house" src="/image/image_oneroom.png" alt="집ㅋㅎ" />
        <div className="guide-txt">등록한 매물이 없습니다</div>
      </n.GuideContainer>
      <n.RegisterBtnContainer>
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
