import * as c from './style/ContractMainStyle'
import ContractBoottomSheet from '@/components/SmartContract/ContractBoottomSheet'

const ContractMain = () => {
  return (
    <>
      <c.ContractMainContainer>
        <c.Contract id="paperContainer">
          <div className="content-box">
            <p>오기선</p>
            <p>김두칠</p>
          </div>
          <div className="content-box2">
            <p>광주광역시 광산구 장덕동 해와달</p>
          </div>
          <div className="content-box3">
            <p>주거용</p>
            <p>33</p>
          </div>
          <div className="content-box4">
            <p>1층</p>
            <p>33</p>
          </div>
          <div className="content-box5">
            <p>1000000000</p>
          </div>
          <div className="content-box6">
            <p>1000000000</p>
          </div>
        </c.Contract>
        <ContractBoottomSheet></ContractBoottomSheet>
      </c.ContractMainContainer>
    </>
  )
}

export default ContractMain
