// import Lottie from 'react-lottie'
import PigDrop from '@assets/lotties/PigDrop.json'
import * as c from '@common/style/CompletePigContainerStyle'
const CompletePigContainer = () => {
  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: PigDrop,
  //     rendererSettings: {
  //       preserveAspectRatio: 'xMidYMid slice',
  //     },
  //   }

  return (
    <c.completePigContainer>
      <img
        alt="pighandsup"
        className="pig-handsup"
        src="/image/image_pighandsup.png"
      />
      {/* 돼지 비 일단은 주석처리 */}
      {/* <Lottie options={defaultOptions} height={370} width={350} /> */}
    </c.completePigContainer>
  )
}

export default CompletePigContainer
