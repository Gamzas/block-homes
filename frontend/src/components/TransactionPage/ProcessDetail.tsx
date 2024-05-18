import TextWithBold from '@/hooks/useTextBold'
import * as p from './style/ProcessDetailStyle'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import { useState } from 'react'
import SpecialContract from '@components/TransactionPage/SpecialContract'

interface ProcessDetailProps {
  title: string
  content: string
  currentStep: number
  stepIndex: number
}

const ProcessDetail = (props: ProcessDetailProps) => {
  const [isSpecialOpen, setIsSpecialOpenOpen] = useState(false)

  const handleOpenModal = () => {
    setIsSpecialOpenOpen(true)
  }

  const handleCloseModal = () => {
    setIsSpecialOpenOpen(false)
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
          {props.currentStep === props.stepIndex && props.stepIndex === 0 && (
            <CustomButtonStyle
              $secondary={true}
              style={{
                width: '7rem',
                height: '2.5rem',
                fontSize: '0.8rem',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#E8E8E8',
                fontWeight: '600',
                color: '#B0B0B0',
              }}
            >
              요청 거절하기
            </CustomButtonStyle>
          )}
          {props.currentStep === props.stepIndex && props.stepIndex === 0 && (
            <CustomButtonStyle
              style={{
                width: '7rem',
                height: '2.5rem',
                fontSize: '0.8rem',
                marginLeft: '0.5rem',
                fontWeight: '500',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              요청 승낙 하기
            </CustomButtonStyle>
          )}

          {props.currentStep === props.stepIndex && props.stepIndex === 1 && (
            <CustomButtonStyle
              style={{
                width: '8rem',
                height: '2.5rem',
                fontSize: '0.8rem',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                fontWeight: '600',
              }}
            >
              특약사항 작성하기
            </CustomButtonStyle>
          )}

          {props.currentStep === props.stepIndex && props.stepIndex === 2 && (
            <CustomButtonStyle
              $secondary={true}
              style={{
                width: '7rem',
                height: '2.5rem',
                fontSize: '0.8rem',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#E8E8E8',
                fontWeight: '600',
                color: '#B0B0B0',
              }}
            >
              요청 거절하기
            </CustomButtonStyle>
          )}
          {props.currentStep === props.stepIndex && props.stepIndex === 2 && (
            <CustomButtonStyle
              onClick={handleOpenModal}
              style={{
                width: '7rem',
                height: '2.5rem',
                fontSize: '0.8rem',
                marginLeft: '0.5rem',
                fontWeight: '500',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              요청 승낙 하기
            </CustomButtonStyle>
          )}
          {props.currentStep === props.stepIndex && props.stepIndex === 3 && (
            <CustomButtonStyle
              $secondary={true}
              style={{
                width: '7rem',
                height: '2.5rem',
                fontSize: '0.8rem',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                backgroundColor: '#E8E8E8',
                fontWeight: '600',
                color: '#B0B0B0',
              }}
            >
              요청 거절하기
            </CustomButtonStyle>
          )}
          {props.currentStep === props.stepIndex && props.stepIndex === 3 && (
            <CustomButtonStyle
              style={{
                width: '7rem',
                height: '2.5rem',
                fontSize: '0.8rem',
                marginLeft: '0.5rem',
                fontWeight: '500',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              요청 승낙 하기
            </CustomButtonStyle>
          )}
        </div>
      </p.RightProcessDetailContainer>
    </p.ProcessDetailContainer>
  )
}

export default ProcessDetail
