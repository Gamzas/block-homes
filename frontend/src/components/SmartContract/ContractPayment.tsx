import { useEffect, useState } from 'react'
import Step from './Step'
import * as c from './style/ContractPayment'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import { useSwipeable } from 'react-swipeable'
import ScreenIndicators from './ScreenIndicator'
import EstateDidCard from '@/common/EstateDidCard'
import CustomPasswordModal from './CustomPasswordModal'
import IsLoading from '@/common/IsLoading'
import SecurityLock from '@assets/lotties/SecurityLock.json'
import {
  landLordAtom,
  tenantAtom,
  todayAtom,
  contractEndDateAtom,
} from '@/stores/smartcontract'
import { useAtomValue } from 'jotai'
import { DetailItemType } from '@/types/components/estateContractType'

interface ContractPaymentProps {
  handlePayment: (password: any) => Promise<void>
  currentUser: any
  propertyDID: string // 여기에 propertyDID 추가
  estateInfo?: DetailItemType
}

const ContractPayment: React.FC<ContractPaymentProps> = ({
  handlePayment,
  currentUser,
  propertyDID,
  estateInfo,
}) => {
  const [screenIndex, setScreenIndex] = useState(0)

  const [passwordModalOpen, setPasswordModalOpen] = useState(false)
  const totalScreens = 2

  const [isLoading, setIsLoading] = useState(false)
  const [loadingStage, setLoadingStage] = useState(0)
  const landLordData = useAtomValue(landLordAtom)
  const tenantData = useAtomValue(tenantAtom)

  const formattedToday = useAtomValue(todayAtom)
  const contractEndDate = useAtomValue(contractEndDateAtom)

  const loadingMessages = [
    '입력하신 비밀번호로\n지갑을 **복원**하는 중입니다.',
    '블록체인 네트워크에\n접속 중입니다.',
    '거래를 처리하고\n있습니다. 잠시만 기다려주세요.',
  ]

  useEffect(() => {
    let timer
    if (isLoading) {
      timer = setTimeout(() => {
        setLoadingStage(prevStage => {
          const nextStage = (prevStage + 1) % loadingMessages.length
          return nextStage
        })
      }, 5000) // 5초마다 메시지 변경
    }
    return () => clearTimeout(timer)
  }, [isLoading, loadingStage])

  const handleNext = () => {
    setPasswordModalOpen(true) // 모달 열기
  }

  const handlePasswordConfirm = password => {
    setPasswordModalOpen(false)
    setIsLoading(true) // 로딩 시작
    handlePayment(password)
      .then(() => {
        setIsLoading(false) // 로딩 종료
      })
      .catch(() => {
        setIsLoading(false) // 로딩 종료
      })
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setScreenIndex(prevIndex =>
        prevIndex < totalScreens - 1 ? prevIndex + 1 : prevIndex,
      ),
    onSwipedRight: () =>
      setScreenIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex)),
    // preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <>
      <Step currentindex={2}></Step>
      <c.ScreenContainer {...swipeHandlers}>
        <div className="contract-text">
          계약 내용을<br></br>확인해주세요
        </div>
        <ScreenIndicators
          totalScreens={totalScreens}
          currentIndex={screenIndex}
        ></ScreenIndicators>
        <div style={{ position: 'relative' }}>
          {screenIndex === 0 && (
            <>
              <EstateDidCard
                index={1}
                currentCenterIndex={1}
                showRegistrationButton={false}
                realEstateDID={propertyDID}
                currentUser={currentUser}
              />
              <div>
                <p
                  className="card-text"
                  style={{
                    marginTop: '1.4rem',
                    position: 'absolute',
                    width: '12rem',
                    right: '-5%',
                  }}
                >
                  해당 매물은 자동으로 나의 지갑에 추가됩니다
                </p>
              </div>
            </>
          )}
        </div>

        {screenIndex === 1 && (
          <c.GridContainer>
            <c.Cell>
              <c.Label>임대인</c.Label>
              <c.Value>{landLordData.name}</c.Value>
            </c.Cell>
            <c.Cell>
              <c.Label>임차인</c.Label>
              <c.Value>{tenantData.name}</c.Value>
            </c.Cell>
            <c.Cell>
              <c.Label>계약일자</c.Label>
              <c.Value>{formattedToday}</c.Value>
            </c.Cell>
            <c.Cell>
              <c.Label>보증금</c.Label>
              <c.Value>{estateInfo?.price} 만 원</c.Value>
            </c.Cell>
            <c.Cell>
              <c.Label>월세금</c.Label>
              <c.Value>{estateInfo?.monthlyPrice} 만 원</c.Value>
            </c.Cell>
          </c.GridContainer>
        )}

        <div className="button-box">
          <CustomButtonStyle disabled={screenIndex === 0} onClick={handleNext}>
            결제
          </CustomButtonStyle>
        </div>
      </c.ScreenContainer>
      {/* 비밀번호 모달 */}
      <CustomPasswordModal
        open={passwordModalOpen}
        handleClose={() => setPasswordModalOpen(false)}
        handleConfirm={handlePasswordConfirm}
      />
      {isLoading && (
        <IsLoading
          textProps={loadingMessages[loadingStage]}
          lottieProps={SecurityLock}
        />
      )}
    </>
  )
}

export default ContractPayment
