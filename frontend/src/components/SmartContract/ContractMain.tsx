import * as c from './style/ContractMainStyle'
import ContractBoottomSheet from '@/components/SmartContract/ContractBoottomSheet'
import {
  landLordAtom,
  tenantAtom,
  todayAtom,
  contractEndDateAtom,
} from '@/stores/smartcontract'
import { DetailItemType } from '@/types/components/estateContractType'
// import { DetailItemType } from '@/types/components/contractType'
import { useAtomValue } from 'jotai'

interface ContractMainProps {
  estateInfo: DetailItemType
}

const ContractMain: React.FC<ContractMainProps> = ({ estateInfo }) => {
  const landLordData = useAtomValue(landLordAtom)
  const tenantData = useAtomValue(tenantAtom)
  const formattedToday = useAtomValue(todayAtom)
  const contractEndDate = useAtomValue(contractEndDateAtom)
  console.log(estateInfo, 'estateInfo')

  return (
    <>
      <c.ContractMainContainer>
        <c.Contract id="paperContainer">
          <div className="content-box">
            <p>{landLordData.name}</p>
            <p>{tenantData.name}</p>
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
            <p>{estateInfo?.pyeong}</p>
          </div>
          <div className="content-box5">
            <p>{estateInfo?.price}천만 원</p>
          </div>
          <div className="content-box6">
            <p>{estateInfo?.monthlyPrice}</p>
          </div>
          <div className="content-box7">
            <p>{formattedToday}</p>
          </div>
          <div className="content-box8">
            <p>{contractEndDate}</p>
          </div>
        </c.Contract>
        <ContractBoottomSheet></ContractBoottomSheet>
      </c.ContractMainContainer>
    </>
  )
}

export default ContractMain
