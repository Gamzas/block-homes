import Lottie from 'react-lottie'
import * as i from '@common/style/ItemLoadingStyle'
import Loading from '@assets/lotties/ItemLoading.json'

const ItemLoading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <i.LoadingContainer>
      <Lottie options={defaultOptions} height={100} width={100}></Lottie>
      {/* <div className="txt">찜한 매물을 조회중입니다.</div> */}
    </i.LoadingContainer>
  )
}

export default ItemLoading
