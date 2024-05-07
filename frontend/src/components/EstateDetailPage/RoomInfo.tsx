import * as r from '@components/EstateDetailPage/style/RoomInfoStyle'
import Location from './Location'

const RoomInfo = () => {
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
              src={`icon/icon_room_info_${item.icon}.png`}
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
      <r.AdditionalContainer>
        {additionalInfo.map(
          (info, index) =>
            activateInfo[index] && (
              <div className="info-box" key={index}>
                <img
                  className="icon"
                  src={`icon/icon_room_info_${info.icon}.png`}
                  alt={`${info.icon} icon`}
                />
                <div className="name">{info.name}</div>
              </div>
            ),
        )}
      </r.AdditionalContainer>
      <r.TitleContainer>
        <div className="title">상세 설명</div>
        <hr className="underline" />
      </r.TitleContainer>
      <r.DetailContainer>
        <div>
          ⭐ 특징 ⭐ - 1룸 오픈형 구조입니다- 화이트톤 깨끗함의 정석~!
          올리모델링
        </div>
      </r.DetailContainer>
      <r.TitleContainer>
        <div className="title">위치</div>
      </r.TitleContainer>
      <r.LocationWrapper>
        <Location />
      </r.LocationWrapper>
    </r.RoomInfoContainer>
  )
}

export default RoomInfo
