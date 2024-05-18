import ReportSummary from './ReportSummary'
import DepositGraph from './DepositGraph'
import DepositList from './DepositList'
import DangerList from './DangerList'
import { useEffect, useState } from 'react'
import Joyride, { STATUS, Step } from 'react-joyride'
import { getLoanInfo } from '@/abi/Bank/getLoanInfo'
import { useGetRealEstateInfo } from '@/abi/realEstateInfo/getRealEstateInfo'
import { useGetDetailItem } from '@/apis/itemApi'
import { useParams } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { userAtom } from '@/stores/atoms/userStore'

type ExtendedStep = Step & {
  placement: 'top' | 'bottom' | 'left' | 'right' | 'auto' | 'center'
}

const ReportList = ({ onShowHeader, onHideHeader, isHeaderVisible }) => {
  const currentUser = useAtomValue(userAtom)
  console.log('1.currentUser', currentUser)
  console.log('1.currentUser', currentUser.walletAddress)

  // URL 파라미터에서 부동산 번호 추출
  const { estateNo } = useParams()
  const estateNumber = parseInt(estateNo, 10)
  console.log('1.estateNumber', estateNumber)
  const [falseCount, setFalseCount] = useState<any>(0)

  const [checkList, setCheckList] = useState<any>([
    false,
    false,
    false,
    false,
    false,
  ])

  // did
  const [realEstateDid, setRealEstateDid] = useState<any>('')
  // api 부른정보
  const [realEstate, setRealEstate] = useState<any>(null)
  // did 부른정보
  const [realEstateDidInfo, setRealEstateDidInfo] = useState<any>(null)
  // 빚 정보
  const [loanInfo, setLoanInfo] = useState<any>(null)
  console.log('loanInfo', loanInfo)

  const fetchLoanInfo = async () => {
    try {
      const info = await getLoanInfo(realEstateDid)
      setLoanInfo(info)
      console.log('info', info)
    } catch (error) {
      console.error('대출 정보 조회 중 오류 발생:', error)
    }
  }

  const { data: itemDetails } = useGetDetailItem(
    estateNumber,
    currentUser.walletAddress,
  )
  const { data: didestate } = useGetRealEstateInfo(realEstateDid)
  console.log('itemDetails', itemDetails)
  console.log('realEstateDid', realEstateDid)
  console.log('realEstate', realEstate)
  console.log('realEstateDidInfo', realEstateDidInfo)

  useEffect(() => {
    if (itemDetails && itemDetails.realEstateDID) {
      setRealEstateDid(itemDetails.realEstateDID)
      setRealEstate(itemDetails)
    }
    console.log(realEstate)
  }, [itemDetails])

  useEffect(() => {
    if (didestate) {
      setRealEstateDidInfo(didestate)
      fetchLoanInfo()
    }
    console.log('realEstateDidInfo', realEstateDidInfo)
  }, [didestate])

  useEffect(() => {
    let copy = [...checkList]

    if (realEstateDidInfo?.isViolated) {
      copy[1] = true
    }

    if (realEstateDidInfo?.isNotPermitted) {
      copy[2] = true
    }

    if (loanInfo?.pendingLoanAmount !== '0') {
      copy[3] = true
    }

    if (realEstateDidInfo?.purpose !== '주거용') {
      copy[4] = true
    }

    setCheckList(copy)
    console.log('Updated checkList:', copy)
  }, [realEstateDidInfo, loanInfo])

  useEffect(() => {
    let newFalseCount = checkList.filter(item => !item).length
    setFalseCount(newFalseCount)
    console.log('Updated checkList:', checkList)
    console.log('Number of false items:', newFalseCount)
  }, [checkList])
  const [run, setRun] = useState(false)

  const handleGuide = () => {
    console.log('Guide button clicked.')
    onHideHeader()
    setRun(true)
  }

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
      onShowHeader()
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
            zIndex: 10,
            width: 335, // 툴팁의 너비
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
      <div>
        {isHeaderVisible && (
          <div className="question-box" onClick={handleGuide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.3rem"
              height="2.3rem"
              viewBox="0 0 2.3rem 2.3rem"
              fill="none"
            >
              <path
                d="M2.727 27C1.94963 27 1.30106 26.7401 0.781312 26.2204C0.261562 25.7006 0.001125 25.0515 0 24.273V19.4062C0 19.1666 0.0804377 18.9658 0.241313 18.8038C0.402188 18.6418 0.603 18.5614 0.84375 18.5625C1.0845 18.5636 1.28531 18.6441 1.44619 18.8038C1.60706 18.9636 1.6875 19.1644 1.6875 19.4062V24.2747C1.6875 24.5334 1.7955 24.7714 2.0115 24.9885C2.2275 25.2056 2.46544 25.3136 2.72531 25.3125H7.59375C7.8345 25.3125 8.03531 25.3929 8.19619 25.5538C8.35706 25.7147 8.4375 25.9155 8.4375 26.1562C8.4375 26.397 8.35706 26.5978 8.19619 26.7587C8.03531 26.9196 7.8345 27 7.59375 27H2.727ZM24.2747 27H19.4062C19.1666 27 18.9658 26.9196 18.8038 26.7587C18.6418 26.5978 18.5614 26.397 18.5625 26.1562C18.5636 25.9155 18.6441 25.7147 18.8038 25.5538C18.9636 25.3929 19.1644 25.3125 19.4062 25.3125H24.2747C24.5334 25.3125 24.7714 25.2045 24.9885 24.9885C25.2056 24.7725 25.3136 24.534 25.3125 24.273V19.4062C25.3125 19.1666 25.3929 18.9658 25.5538 18.8038C25.7147 18.6418 25.9155 18.5614 26.1562 18.5625C26.397 18.5636 26.5978 18.6441 26.7587 18.8038C26.9196 18.9636 27 19.1644 27 19.4062V24.2747C27 25.0509 26.7401 25.6989 26.2204 26.2187C25.7006 26.7384 25.0532 26.9989 24.2747 27ZM0 2.727C0 1.94963 0.260437 1.30106 0.781312 0.781312C1.30219 0.261562 1.95075 0.001125 2.727 0H7.59375C7.8345 0 8.03531 0.0804377 8.19619 0.241313C8.35706 0.402188 8.4375 0.603 8.4375 0.84375C8.4375 1.0845 8.35706 1.28531 8.19619 1.44619C8.03531 1.60706 7.8345 1.6875 7.59375 1.6875H2.727C2.46713 1.6875 2.22862 1.7955 2.0115 2.0115C1.79437 2.2275 1.68638 2.466 1.6875 2.727V7.59375C1.6875 7.8345 1.60706 8.03531 1.44619 8.19619C1.28531 8.35706 1.0845 8.4375 0.84375 8.4375C0.603 8.4375 0.402188 8.35706 0.241313 8.19619C0.0804377 8.03531 0 7.8345 0 7.59375V2.727ZM27 2.727V7.59375C27 7.8345 26.9196 8.03531 26.7587 8.19619C26.5978 8.35706 26.397 8.4375 26.1562 8.4375C25.9155 8.4375 25.7147 8.35706 25.5538 8.19619C25.3929 8.03531 25.3125 7.8345 25.3125 7.59375V2.727C25.3125 2.46713 25.2045 2.22862 24.9885 2.0115C24.7725 1.79437 24.534 1.68638 24.273 1.6875H19.4062C19.1666 1.6875 18.9658 1.60706 18.8038 1.44619C18.6418 1.28531 18.5614 1.0845 18.5625 0.84375C18.5636 0.603 18.6441 0.402188 18.8038 0.241313C18.9636 0.0804377 19.1644 0 19.4062 0H24.2747C25.0509 0 25.6989 0.260437 26.2187 0.781312C26.7384 1.30219 26.9989 1.95075 27 2.727ZM13.5658 22.2952C13.9393 22.2952 14.2543 22.167 14.5108 21.9105C14.7673 21.654 14.8956 21.3384 14.8956 20.9638C14.8956 20.5892 14.7673 20.2742 14.5108 20.0188C14.2543 19.7634 13.9393 19.6352 13.5658 19.6341C13.1923 19.6329 12.8767 19.7612 12.6191 20.0188C12.3615 20.2764 12.2333 20.5914 12.2344 20.9638C12.2355 21.3362 12.3637 21.6512 12.6191 21.9088C12.8745 22.1664 13.1912 22.2952 13.5658 22.2952ZM13.5641 6.27581C14.4259 6.27581 15.1684 6.54975 15.7916 7.09763C16.4171 7.64438 16.7299 8.33456 16.7299 9.16819C16.7299 9.77119 16.5527 10.3207 16.1983 10.8169C15.8451 11.3119 15.4401 11.7596 14.9833 12.1601C14.2521 12.8284 13.7076 13.4511 13.3498 14.0282C12.9921 14.6053 12.7845 15.2364 12.7271 15.9216C12.699 16.1421 12.7642 16.3294 12.9229 16.4835C13.0804 16.6387 13.2728 16.7164 13.5 16.7164C13.7205 16.7164 13.9118 16.6404 14.0738 16.4886C14.2346 16.3378 14.3325 16.1488 14.3674 15.9216C14.445 15.4434 14.6138 15.0159 14.8736 14.6391C15.1335 14.2622 15.5413 13.7959 16.0971 13.2401C16.9509 12.3851 17.5399 11.6662 17.8639 11.0835C18.1879 10.5007 18.3493 9.85275 18.3482 9.1395C18.3482 7.83675 17.9083 6.77194 17.0286 5.94506C16.1477 5.11931 15.0148 4.70644 13.6299 4.70644C12.6714 4.70644 11.7945 4.923 10.9991 5.35612C10.2037 5.78925 9.567 6.41925 9.08887 7.24612C8.98537 7.43287 8.97356 7.63144 9.05344 7.84181C9.13219 8.05331 9.27844 8.19675 9.49219 8.27213C9.68456 8.3475 9.88987 8.35312 10.1081 8.289C10.3264 8.22487 10.5041 8.10225 10.6414 7.92113C11.016 7.44075 11.4446 7.047 11.9272 6.73987C12.4099 6.43275 12.9555 6.27806 13.5641 6.27581Z"
                fill="black"
              />
            </svg>
          </div>
        )}
      </div>
      <div style={{ height: '1rem' }}></div>
      <div className="report-summary" style={{ width: '90%' }}>
        <ReportSummary falseCount={falseCount} />
      </div>
      <div style={{ height: '1rem' }}></div>
      <div className="deposit-graph" style={{ width: '90%' }}>
        <DepositGraph></DepositGraph>
      </div>
      <div style={{ height: '1rem' }}></div>
      <div className="deposit-list" style={{ width: '90%' }}>
        <DepositList price={realEstate?.price}></DepositList>
      </div>
      <div style={{ height: '1rem' }}></div>
      <div
        className="danger-list"
        style={{ width: '90%', marginBottom: '13rem' }}
      >
        <DangerList checkList={checkList}></DangerList>
      </div>
    </>
  )
}

export default ReportList
