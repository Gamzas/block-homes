import * as n from '@components/MyContractpage/style/NoCtractStyle'
const NoContract = () => {
  return (
    <n.NoMyItemsContainer>
      <n.GuideContainer>
        <img className="house" src="/image/image_contract.png" alt="집ㅋㅎ" />
        {/* <div className="guide-txt">거래내역이 없습니다</div> */}
      </n.GuideContainer>
      <n.RegisterBtnContainer>
        <img
          className="btn-img"
          src="/image/image_VC_certification.png"
          alt=""
        />
        <div className="btn-txt">거래 내역이 없습니다.</div>
      </n.RegisterBtnContainer>
    </n.NoMyItemsContainer>
  )
}

export default NoContract
