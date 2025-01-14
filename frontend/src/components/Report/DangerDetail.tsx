import { useState } from 'react'
import { DangerDetailContainer, ToggleMessage } from './style/DangerDetailStyle'

type Props = { isDanger: boolean; dangerIndex: number }

const DangerDetail = (props: Props) => {
  const message = {
    true: [
      '건물의 소유자와 판매자가 일치하지 않습니다.',
      '위반 건축물입니다.',
      '무허가 건축물입니다.',
      '권리 침해사항이 있습니다.',
      '주거용 건물이 아닙니다.',
    ],
    false: [
      '건물의 소유자와 판매자가 일치합니다.',
      '위반 건축물이 아닙니다.',
      '무허가 건축물이 아닙니다.',
      '권리 침해사항이 없습니다.',
      '주거용 건물입니다.',
    ],
    toggleMessage: [
      '부동산 건물주와 거래자가 다를 경우 법적, 재정적 노출 위험이 있을 수 있습니다.',
      '위반건축물에 등재되어 있는 경우 전세보증가입에 제한이 있을 수 있습니다.',
      '무허가 건축물에 등재되어있는 경우 전세보증가입에 제한이 있을 수 있습니다.',
      '주택의 등기부등본 상 가압류, 압류, 가처분, 경매개시 등 권리 침해 사항이 확인되는 경우 전세보증금반환보증 가입이 불가 합니다.',
      '주거용 건물이 아닌 곳은 전세보증보험 및 전세대출이 불가능합니다. ',
    ],
  }

  const selectMessage =
    message[props.isDanger ? 'true' : 'false'][props.dangerIndex]
  const selectToggleMessage = message['toggleMessage'][props.dangerIndex]

  const [isVisible, setIsVisible] = useState(true)
  return (
    <DangerDetailContainer>
      <div className={`title ${props.isDanger ? 'danger' : ''}`}>
        <div>
          {props.isDanger ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{ marginRight: '0.5rem' }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM10.4073 11.9739C10.2137 12.1554 9.95119 12.2574 9.67742 12.2574C9.40365 12.2574 9.14109 12.1554 8.9475 11.9739C8.75392 11.7924 8.64516 11.5463 8.64516 11.2896V5.48318C8.64516 5.22652 8.75392 4.98037 8.9475 4.79888C9.14109 4.6174 9.40365 4.51544 9.67742 4.51544C9.95119 4.51544 10.2137 4.6174 10.4073 4.79888C10.6009 4.98037 10.7097 5.22652 10.7097 5.48318V11.2896C10.7097 11.5463 10.6009 11.7924 10.4073 11.9739ZM10.3943 15.9245C10.1821 16.0574 9.93262 16.1283 9.67742 16.1283C9.33521 16.1283 9.00701 16.0009 8.76502 15.774C8.52304 15.5472 8.3871 15.2395 8.3871 14.9187C8.3871 14.6794 8.46277 14.4455 8.60456 14.2466C8.74634 14.0477 8.94786 13.8926 9.18363 13.8011C9.41941 13.7095 9.67885 13.6856 9.92915 13.7322C10.1794 13.7789 10.4094 13.8941 10.5898 14.0633C10.7703 14.2325 10.8932 14.448 10.9429 14.6827C10.9927 14.9173 10.9672 15.1605 10.8695 15.3816C10.7719 15.6026 10.6065 15.7916 10.3943 15.9245Z"
                fill="#FA5655"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{ marginRight: '0.5rem' }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM16.7071 6.70711C17.0976 6.31658 17.0976 5.68342 16.7071 5.29289C16.3166 4.90237 15.6834 4.90237 15.2929 5.29289L8 12.5858L4.70711 9.29289C4.31658 8.90237 3.68342 8.90237 3.29289 9.29289C2.90237 9.68342 2.90237 10.3166 3.29289 10.7071L7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L16.7071 6.70711Z"
                fill="#43C259"
              />
            </svg>
          )}
        </div>
        <div className="title-box">{selectMessage}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="10"
          viewBox="0 0 15 10"
          fill="none"
          onClick={() => {
            setIsVisible(!isVisible)
          }}
          className={isVisible ? 'rotate-arrow' : ''}
        >
          <path
            d="M0.738332 9.045C0.93758 9.25591 1.20778 9.37439 1.48952 9.37439C1.77126 9.37439 2.04146 9.25591 2.24071 9.045L7.50008 3.47625L12.7595 9.045C12.9598 9.24993 13.2282 9.36332 13.5068 9.36076C13.7854 9.3582 14.0519 9.23988 14.2489 9.0313C14.4459 8.82271 14.5576 8.54055 14.56 8.24558C14.5625 7.95061 14.4554 7.66643 14.2618 7.45425L8.25127 1.09013C8.05202 0.879222 7.78182 0.760742 7.50008 0.760742C7.21834 0.760742 6.94814 0.879222 6.74889 1.09013L0.738332 7.45425C0.539144 7.66522 0.427246 7.95132 0.427246 8.24963C0.427246 8.54794 0.539144 8.83403 0.738332 9.045Z"
            fill="#808080"
          />
        </svg>
      </div>
      <ToggleMessage isVisible={isVisible}>{selectToggleMessage}</ToggleMessage>
    </DangerDetailContainer>
  )
}

export default DangerDetail
