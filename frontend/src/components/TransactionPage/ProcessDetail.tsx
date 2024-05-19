import TextWithBold from '@/hooks/useTextBold'
import * as p from './style/ProcessDetailStyle'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import { useState } from 'react'
import SpecialContract from '@components/TransactionPage/SpecialContract'
import { useAtom } from 'jotai/index'
import {
  chatRoomNoAtom,
  isGoNextStepAtom,
  provisionIsCancelAtomFamily,
} from '@stores/atoms/chat'
import { useNavigate } from 'react-router-dom'
import { userModeAtom, userStepAtom } from '@stores/atoms/userStore'

interface ProcessDetailProps {
  title: string
  content: string
  currentStep: number
  stepIndex: number
}

const ProcessDetail = (props: ProcessDetailProps) => {
  const [chatRoomNum] = useAtom(chatRoomNoAtom)
  const navigate = useNavigate()
  const [isSpecialOpen, setIsSpecialOpen] = useState(false)
  const [, setIsGoNextStep] = useAtom(isGoNextStepAtom)
  // const [sellerStep] = useAtom(sellerStepAtom)
  // const [buyerStep] = useAtom(buyerStepAtom)
  const [userMode] = useAtom(userModeAtom)
  const [userStep] = useAtom(userStepAtom)
  const [isCancel] = useAtom(provisionIsCancelAtomFamily(chatRoomNum))

  console.log(userStep)

  const handleCloseModal = () => {
    console.log(isCancel)
    if (!isCancel) {
      setIsGoNextStep(true)
    } else {
      setIsGoNextStep(false)
    }
    setIsSpecialOpen(false)
    navigate(-1)
  }

  const goNextStep = () => {
    setIsGoNextStep(true)
    navigate(-1)
  }

  const goSmartContact = () => {
    setIsGoNextStep(true)
    navigate(`/smart-contract/${chatRoomNum}`)
  }

  const goSmartContactTenant = () => {
    setIsGoNextStep(true)
    navigate(`/smart-contract-tenant/${chatRoomNum}`)
  }

  const openModalAndGoNextStep = () => {
    setIsSpecialOpen(true)
  }

  return (
    <p.ProcessDetailContainer
      $currentStep={props.currentStep}
      $stepIndex={props.stepIndex}
    >
      <SpecialContract open={true} handleClose={handleCloseModal} />
      <p.LeftProcessDetailContainer
        $currentStep={props.currentStep}
        $stepIndex={props.stepIndex}
      >
        <div className="circle">
          {props.stepIndex === props.currentStep ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="pulse-animation"
            >
              <circle
                cx="12"
                cy="12"
                r="7"
                fill="#845BD3"
                stroke="#845BD3"
                strokeWidth="2"
              />
              <circle cx="12" cy="12" r="11" stroke="#845BD3" strokeWidth="2" />
            </svg>
          ) : props.stepIndex < props.currentStep ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="#845BD3"
            >
              <circle
                cx="8.5"
                cy="8.5"
                r="7.5"
                stroke="#845BD3"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <circle
                cx="8.5"
                cy="8.5"
                r="7.5"
                stroke="#845BD3"
                strokeWidth="2"
              />
            </svg>
          )}
        </div>
        <div className="line" />
      </p.LeftProcessDetailContainer>
      <p.RightProcessDetailContainer
        $currentStep={props.currentStep}
        $stepIndex={props.stepIndex}
      >
        <p.ProcessContentContainer
          $currentStep={props.currentStep}
          $stepIndex={props.stepIndex}
        >
          <div className="title-box">
            <TextWithBold text={props.title} />
          </div>
          <div className="content-box">
            <TextWithBold text={props.content} />
          </div>
        </p.ProcessContentContainer>

        <div className="button-box">
          {userMode === 2 &&
            props.currentStep === 1 &&
            props.stepIndex === 1 && (
              <CustomButtonStyle
                style={{
                  width: '7rem',
                  height: '2.5rem',
                  fontSize: '0.8rem',
                  marginLeft: '0.5rem',
                  fontWeight: '500',
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                }}
                onClick={goNextStep}
              >
                요청 보내기
              </CustomButtonStyle>
            )}

          {userMode === 1 &&
            props.currentStep === 2 &&
            props.stepIndex === 2 && (
              <CustomButtonStyle
                style={{
                  width: '7rem',
                  height: '2.5rem',
                  fontSize: '0.8rem',
                  marginLeft: '0.5rem',
                  fontWeight: '500',
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                }}
                onClick={goNextStep}
              >
                요청 승낙 하기
              </CustomButtonStyle>
            )}

          {userMode === 2 &&
            props.currentStep === 3 &&
            props.stepIndex === 3 && (
              <CustomButtonStyle
                style={{
                  width: '8rem',
                  height: '2.5rem',
                  fontSize: '0.8rem',
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                  fontWeight: '600',
                }}
                onClick={openModalAndGoNextStep}
              >
                특약사항 작성하기
              </CustomButtonStyle>
            )}

          {userMode === 1 &&
            props.currentStep === 4 &&
            props.stepIndex === 4 && (
              <CustomButtonStyle
                style={{
                  width: '8rem',
                  height: '2.5rem',
                  fontSize: '0.8rem',
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                  fontWeight: '600',
                }}
                onClick={openModalAndGoNextStep}
              >
                특약사항 작성하기
              </CustomButtonStyle>
            )}

          {userMode === 2 &&
            props.currentStep === 5 &&
            props.stepIndex === 5 && (
              <CustomButtonStyle
                style={{
                  width: '9rem',
                  height: '2.5rem',
                  fontSize: '0.8rem',
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                  fontWeight: '600',
                }}
                //계약서 서명 페이지로 이동
                onClick={goSmartContact}
              >
                계약서 생성 및 서명
              </CustomButtonStyle>
            )}

          {userMode === 1 &&
            props.currentStep === 6 &&
            props.stepIndex === 6 && (
              <CustomButtonStyle
                // onClick={handleOpenModal}
                style={{
                  width: '8rem',
                  height: '2.5rem',
                  fontSize: '0.8rem',
                  marginLeft: '0.5rem',
                  fontWeight: '500',
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                }}
                onClick={goSmartContactTenant}
              >
                서명 및 결제 하기
              </CustomButtonStyle>
            )}

          {userMode === 2 &&
            props.currentStep === 7 &&
            props.stepIndex === 7 && (
              <CustomButtonStyle
                style={{
                  width: '9rem',
                  height: '2.5rem',
                  fontSize: '0.8rem',
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                  fontWeight: '600',
                }}
                onClick={goNextStep}
              >
                홈으로 돌아가기
              </CustomButtonStyle>
            )}

          {userMode === 1 &&
            props.currentStep === 8 &&
            props.stepIndex === 8 && (
              <CustomButtonStyle
                style={{
                  width: '9rem',
                  height: '2.5rem',
                  fontSize: '0.8rem',
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                  fontWeight: '600',
                }}
                onClick={goNextStep}
              >
                홈으로 돌아가기
              </CustomButtonStyle>
            )}
        </div>
      </p.RightProcessDetailContainer>
    </p.ProcessDetailContainer>
  )
}

export default ProcessDetail
