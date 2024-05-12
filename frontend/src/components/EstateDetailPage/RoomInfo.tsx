import * as r from '@components/EstateDetailPage/style/RoomInfoStyle'
import Location from './Location'
import { EstateItem } from '@/types/estateListType'
import TransactionProcedure from './TransactionProcedure'

interface PropsType {
  info: EstateItem
}

// TODO 매물별 방 정보 출력 수정하기!!
const RoomInfo = (props: PropsType) => {
  const { latitude, longitude } = props.info
  const infoItems = [
    { icon: 'count', info: '원룸' },
    { icon: 'area', info: '방1 화1' },
    { icon: 'detail', info: '28.75m2' },
    { icon: 'floor', info: '2층' },
  ]

  const additionalInfo = [
    { icon: 'parking', name: '주차 가능' },
    { icon: 'washing-machine', name: '세탁기' },
    { icon: 'refrigerator', name: '냉장고' },
    { icon: 'air', name: '에어컨' },
  ]

  const activateInfo = [true, true, false, true]

  const detailText = `⭐ 특징 ⭐ 
  - 1룸 오픈형 구조입니다- 화이트톤 깨끗함의 정석~! 올리모델링 
  ⭐ 위치 ⭐
  - 신사동 가로수길 블럭입니다- 신사/압구정 도보거리 이용가능
  `
  return (
    <r.RoomInfoContainer>
      <r.TitleContainer>
        <div className="title">방 정보</div>
        <hr className="underline" />
      </r.TitleContainer>
      <r.DetailInfoContainer>
        {infoItems.map((item, index) => (
          <div className="info-box" key={index}>
            <img
              className="icon"
              src={`/icon/icon_room_info_${item.icon}.png`}
              alt={`${item.icon}_icon`}
            />
            <div className="info-text">{item.info}</div>
          </div>
        ))}
      </r.DetailInfoContainer>
      <r.TitleContainer>
        <div className="title">추가 정보</div>
        <hr className="underline" />
      </r.TitleContainer>
      <r.AdditionalWrapper>
        <r.AdditionalContainer>
          {additionalInfo.map(
            (info, index) =>
              activateInfo[index] && (
                <div className="info-box" key={index}>
                  <img
                    className="icon"
                    src={`/icon/icon_room_info_${info.icon}.png`}
                    alt={`${info.icon} icon`}
                  />
                  <div className="name">{info.name}</div>
                </div>
              ),
          )}
        </r.AdditionalContainer>
      </r.AdditionalWrapper>

      <r.TitleContainer>
        <div className="title">상세 설명</div>
        <hr className="underline" />
      </r.TitleContainer>
      <r.DetailContainer>
        <p className="detail-text">{detailText}</p>
      </r.DetailContainer>
      <r.TitleContainer>
        <div className="title">거래 절차</div>
      </r.TitleContainer>
      <r.TransactionProcedureContainer>
        <TransactionProcedure />
      </r.TransactionProcedureContainer>
      <r.TitleContainer>
        <div className="title">위치</div>
      </r.TitleContainer>
      <r.LocationWrapper>
        <Location latitude={latitude} longitude={longitude} />
      </r.LocationWrapper>
    </r.RoomInfoContainer>
  )
}

export default RoomInfo
