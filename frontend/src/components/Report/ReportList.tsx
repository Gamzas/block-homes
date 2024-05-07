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
  const [run, setRun] = useState(true)

  const steps: ExtendedStep[] = [
    {
      target: '.report-summary',
      content:
        '이곳은 보고서 요약입니다. 주요 지표와 데이터 요약을 볼 수 있습니다.',
      placement: 'auto',
    },
    {
      target: '.deposit-graph',
      content:
        '여기에는 입금 내역을 그래프로 표시합니다. 데이터의 시각적 분석을 제공합니다.',
      placement: 'auto',
    },
    {
      target: '.deposit-list',
      content:
        '입금 목록을 확인할 수 있는 섹션입니다. 상세한 입금 내역을 볼 수 있습니다.',
      placement: 'bottom',
    },
    {
      target: '.danger-list',
      content:
        '위험 목록은 주의가 필요한 항목들을 나열합니다. 특정 경고 및 알림을 관리하세요.',
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
        showProgress
        showSkipButton
        styles={{
          options: {
            zIndex: 1000,
            arrowColor: '#e3ffeb', // 화살표 색상
            // backgroundColor: '#f04', // 배경 색상
            // overlayColor: 'rgba(79, 26, 0, 0.4)', // 오버레이 색상
            primaryColor: '#845bd3', // 주 색상
            // textColor: '#fff', // 텍스트 색상
            width: 360, // 툴팁의 너비
            // spotlightPadding: 10, // 스포트라이트 패딩
          },
        }}
      />
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
