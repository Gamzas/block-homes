import * as r from '@components/EstateDetailPage/style/RoomInfoStyle'
import Location from './Location'
import { DetailItemType } from '@/types/components/estateListType'
import TransactionProcedure from './TransactionProcedure'
import { getRealEstateType } from '@/utils/estateTransferUtil'
import { numberToMoney } from './../../utils/estateTransferUtil'

interface PropsType {
  info: DetailItemType
}

const RoomInfo = (props: PropsType) => {
  const { latitude, longitude } = props.info
  const info = props.info
  const infoItems = [
    { icon: 'count', info: getRealEstateType(info.realEstateType) },
    { icon: 'area', info: `방 ${info.roomNumber} 화 ${info.toiletNumber}` },
    { icon: 'detail', info: `${info.area}m2` },
    {
      icon: 'floor',
      info:
        info.itemFloor !== 0
          ? `${info.itemFloor} 층 / ${info.buildingFloor} 층`
          : '단독',
    },
    {
      icon: 'detail',
      info: `관리비 ${numberToMoney(info.administrationCost)}`,
    },
    { icon: 'detail', info: `${info.area}m2` },
  ]

  const adminFeeInfo = [
    { icon: 'air', name: '전기' },
    { icon: 'refrigerator', name: '가스' },
    { icon: 'washing-machine', name: '수도' },
    { icon: 'parking', name: '인터넷' },
    { icon: 'air', name: 'TV' },
  ]

  const additionalInfo = [
    { icon: 'air', name: '에어컨' },
    { icon: 'refrigerator', name: '냉장고' },
    { icon: 'washing-machine', name: '세탁기' },
    { icon: 'parking', name: '가스레인지' },
    { icon: 'air', name: '인덕션' },
    { icon: 'air', name: '전자레인지' },
    { icon: 'air', name: '책상' },
    { icon: 'air', name: '책장' },
    { icon: 'air', name: '침대' },
    { icon: 'air', name: '옷장' },
    { icon: 'air', name: '신발장' },
    { icon: 'air', name: '싱크대' },
  ]

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

      <r.AdminFeeContainer>
        <hr className="underline" />
        <div className="price">
          관리비 : {numberToMoney(info.administrationCost)}
        </div>
        <div className="option">
          {info.itemAdministrationFeeList.map((item, index) => (
            <div className="txt" key={index}>
              {adminFeeInfo[item - 1].name}
            </div>
          ))}
        </div>
        <hr className="underline" />
      </r.AdminFeeContainer>
      <r.TitleContainer>
        <div className="title">추가 옵션</div>
        <hr className="underline" />
      </r.TitleContainer>
      <r.AdditionalWrapper>
        <r.AdditionalContainer>
          {info.itemAdditionalOptionList.map(
            (info, index) =>
              additionalInfo[info - 1] && (
                <div className="info-box" key={index}>
                  <img
                    className="icon"
                    src={`/icon/icon_room_info_${additionalInfo[info - 1].icon}.png`}
                    alt={`${additionalInfo[info - 1].icon} icon`}
                  />
                  <div className="name">{additionalInfo[info - 1].name}</div>
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
        <p className="detail-text">{info.description}</p>
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
