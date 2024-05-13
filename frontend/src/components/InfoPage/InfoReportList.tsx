import ReportSummary from '@components/Report/ReportSummary'
import DepositGraph from '@components/Report/DepositGraph'
import DepositList from '@components/Report/DepositList'
import DangerList from '@components/Report/DangerList'
import { useState } from 'react'
import Joyride, { STATUS, Step } from 'react-joyride'

type ExtendedStep = Step & {
  placement: 'top' | 'bottom' | 'left' | 'right' | 'auto' | 'center'
}

const InfoReportList = () => {
  const [run, setRun] = useState(true)

  const steps: ExtendedStep[] = [
    {
      target: '.report-summary',
      content: (
        <div>
          <span style={{ fontWeight: '700' }}> 보고서 요약 세션</span>입니다.
          <span style={{ fontWeight: '700' }}> 위험 요소 5가지</span>를 통해
          <span style={{ fontWeight: '700' }}> 위험, 경계, 안전</span>으로 나뉜
          등급과 요약된 데이터를 제공합니다.
        </div>
      ),
      placement: 'auto',
    },
    {
      target: '.deposit-graph',
      content: (
        <div>
          <span style={{ fontWeight: '700' }}>전세금 변화 그래프 세션</span>
          입니다. 매물의{' '}
          <span style={{ fontWeight: '700' }}>
            10년 동안의 전세금 변화 추이
          </span>
          를 시각적으로 제공합니다.
        </div>
      ),
      placement: 'auto',
    },
    {
      target: '.deposit-list',
      content: (
        <div>
          <span style={{ fontWeight: '700' }}>안전 보증금 세션</span>입니다. 본
          매물의 권장 보증금은 매매시세 평균과 지역의 전세가율을 통해{' '}
          <span style={{ fontWeight: '700' }}>
            경매 발생 시 회수 가능한 보증금
          </span>
          을 유추합니다. <br />
          <br />이 금액 이상의 보증금 설정은 경매 발생 시{' '}
          <span style={{ fontWeight: '700' }}>전액 회수에 어려움</span>이 있을
          수 있습니다. 또한 경매 낙찰가율을 통한{' '}
          <span style={{ fontWeight: '700' }}>보증금 상한선</span>을 제공하여
          안전한 거래 데이터를 제공하고 있습니다.
        </div>
      ),
      placement: 'bottom',
    },
    {
      target: '.danger-list',
      content: (
        <div>
          <span style={{ fontWeight: '700' }}>매물 위험 평가 세션</span>입니다.
          다섯 가지 주요 위험 요소를 통해 매물의 안전성을 평가합니다.
          <br /> <br />
          여기에는&nbsp;
          <span style={{ fontWeight: '700' }}>
            건물의 소유권 일치 여부, 건축 허가 상태, 권리 침해 유무, 그리고
            건물의 용도
          </span>
          가 포함됩니다.
        </div>
      ),
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
            zIndex: 10,
            width: 360, // 툴팁의 너비
            primaryColor: '#845bd3',
          },
          tooltipContent: {
            textAlign: 'left',
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
      <div style={{ height: '1rem' }}></div>
      <div className="report-summary" style={{ width: '90%' }}>
        <ReportSummary />
      </div>
      <div style={{ height: '1rem' }}></div>
      <div className="deposit-graph" style={{ width: '90%' }}>
        <DepositGraph />
      </div>
      <div style={{ height: '1rem' }}></div>
      <div className="deposit-list" style={{ width: '90%' }}>
        <DepositList />
      </div>
      <div style={{ height: '1rem' }}></div>
      <div
        className="danger-list"
        style={{ width: '90%', marginBottom: '2rem' }}
      >
        <DangerList />
      </div>
    </>
  )
}

export default InfoReportList
