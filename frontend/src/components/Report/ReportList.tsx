import ReportSummary from './ReportSummary'
import DepositGraph from './DepositGraph'
import DepositList from './DepositList'
import DangerList from './DangerList'
import { useState } from 'react'
import Joyride, { STATUS, Step } from 'react-joyride'

type ExtendedStep = Step & {
  placement: 'top' | 'bottom' | 'left' | 'right' | 'auto' | 'center'
}

const ReportList = () => {
  const [run, setRun] = useState(false)

  const handleGuide = () => {
    console.log('Guide button clicked.')
    setRun(true)
  }

  const steps: ExtendedStep[] = [
    {
      target: '.report-summary',
      content:
        '보고서 요약 세션입니다. 위험 요소 5가지를 통해 위험, 경계, 안전으로 나뉜 등급과 요약된 데이터를 제공합니다.',
      placement: 'auto',
    },
    {
      target: '.deposit-graph',
      content:
        '전세금 변화 그래프 세션입니다. 매물의 10년 동안의 전세금 변화 추이를 시각적으로 제공합니다.',
      placement: 'auto',
    },
    {
      target: '.deposit-list',
      content:
        '안전 보증금 세션입니다. 본 매물의 권장 보증금은 매매시세 평균과 지역의 전세가율을 통해 경매 발생 시 회수 가능한 보증금을 유추합니다. 이 금액 이상의 보증금 설정은 경매 발생 시 전액 회수에 어려움이 있을 수 있습니다. 또한 경매 낙찰가율을 통한 보증금 상한선을 제공하여 안전한 거래 데이터를 제공하고 있습니다.',
      placement: 'bottom',
    },
    {
      target: '.danger-list',
      content:
        '매물 위험 평가 세션입니다. 다섯 가지 주요 위험 요소를 통해 매물의 안전성을 평가합니다. 여기에는 건물의 소유권 일치 여부, 건축 허가 상태, 권리 침해 유무, 그리고 건물의 용도가 포함됩니다.',
      placement: 'top',
    },
  ]
  const handleJoyrideCallback = data => {
    const { status } = data
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED]
    if (finishedStatuses.includes(status)) {
      setRun(false)
    }
  }

  return (
    <>
      <Joyride
        continuous
        run={run}
        steps={steps}
        callback={handleJoyrideCallback}
        scrollToFirstStep
        showProgress
        showSkipButton
        styles={{
          options: {
            zIndex: 1000,
            width: 360, // 툴팁의 너비
          },
          buttonNext: {
            backgroundColor: '#845bd3',
            color: '#fff',
          },
          buttonBack: {
            borderRadius: '0.5px',
            color: '#D9D9D9',
          },
        }}
      />
      <div>
        <div className="question-box" onClick={handleGuide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.3rem"
            height="2.3rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12.44 13.11l-.17-.11a1 1 0 0 0-1.09.22a.87.87 0 0 0-.22.32a1 1 0 0 0-.08.39a1 1 0 0 0 .08.38a1.07 1.07 0 0 0 .54.54a1 1 0 0 0 .38.08a1.09 1.09 0 0 0 .39-.08a1 1 0 0 0 .32-.22a1 1 0 0 0 0-1.41ZM11.88 6A2.75 2.75 0 0 0 9.5 7.32a1 1 0 1 0 1.73 1a.77.77 0 0 1 .65-.32a.75.75 0 1 1 0 1.5a1 1 0 1 0 0 2a2.75 2.75 0 1 0 0-5.5m8.58 3.68A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83Zm-3.86 5.37l-4.6 4.6l-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0a6.57 6.57 0 0 1 2.89 4.81a6.49 6.49 0 0 1-1.87 5.24"
            />
          </svg>
        </div>
      </div>
      <div className="report-summary" style={{ width: '90%' }}>
        <ReportSummary />
      </div>
      <div className="deposit-graph" style={{ width: '90%' }}>
        <DepositGraph></DepositGraph>
      </div>
      <div className="deposit-list" style={{ width: '90%' }}>
        <DepositList></DepositList>
      </div>
      <div className="danger-list" style={{ width: '90%' }}>
        <DangerList></DangerList>
      </div>
    </>
  )
}

export default ReportList
