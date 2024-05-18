import TextWithBold from '@/hooks/useTextBold'
import * as p from './style/ProcessDetailStyle'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import { useEffect, useState } from 'react'
import SpecialContract from '@components/TransactionPage/SpecialContract'
import { useAtom } from 'jotai/index'
import { isGoNextStepAtom } from '@stores/atoms/chat'
import { useNavigate } from 'react-router-dom'
import { buyerStepAtom, sellerStepAtom } from '@stores/atoms/userStore'

interface ProcessDetailProps {
  title: string
  content: string
  currentStep: number
  stepIndex: number
}

const ProcessDetail = (props: ProcessDetailProps) => {
  const navigate = useNavigate()
  const [isSpecialOpen, setIsSpecialOpen] = useState(false)
  const [, setIsGoNextStep] = useAtom(isGoNextStepAtom)
  const [sellerStep] = useAtom(sellerStepAtom)
  const [buyerStep] = useAtom(buyerStepAtom)

  useEffect(() => {
    console.log(sellerStep, buyerStep)
  }, [sellerStep, buyerStep])

  const handleCloseModal = () => {
    setIsSpecialOpen(false)
  }

  const goNextStep = () => {
    setIsGoNextStep(true)
    navigate(-1)
  }

  const openModalAndGoNextStep = () => {
    setIsGoNextStep(true)
    setIsSpecialOpen(true)
  }

  return (
    <p.ProcessDetailContainer
      $currentStep={props.currentStep}
      $stepIndex={props.stepIndex}
    >
      <SpecialContract open={isSpecialOpen} handleClose={handleCloseModal} />
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
          {props.currentStep === props.stepIndex && props.stepIndex === 1 && (
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

          {props.currentStep === props.stepIndex && props.stepIndex === 2 && (
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

          {props.currentStep === props.stepIndex && props.stepIndex === 3 && (
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

          {props.currentStep === props.stepIndex && props.stepIndex === 4 && (
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

          {props.currentStep === props.stepIndex && props.stepIndex === 5 && (
            <CustomButtonStyle
              style={{
                width: '9rem',
                height: '2.5rem',
                fontSize: '0.8rem',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                fontWeight: '600',
              }}
              //계약서 서명 페이지로 이동
              onClick={goNextStep}
            >
              계약서 생성 및 서명
            </CustomButtonStyle>
          )}

          {props.currentStep === props.stepIndex && props.stepIndex === 6 && (
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
              onClick={goNextStep}
            >
              서명 및 결제 하기
            </CustomButtonStyle>
          )}

          {props.currentStep === props.stepIndex && props.stepIndex === 7 && (
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

          {props.currentStep === props.stepIndex && props.stepIndex === 8 && (
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
