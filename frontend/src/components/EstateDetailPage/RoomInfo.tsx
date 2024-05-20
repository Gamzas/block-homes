import * as r from '@components/EstateDetailPage/style/RoomInfoStyle'
import Location from './Location'
import { DetailItemType } from '@/types/components/estateListType'
import TransactionProcedure from './TransactionProcedure'
import { getRealEstateType } from '@/utils/estateTransferUtil'

interface PropsType {
  info: DetailItemType
}

const RoomInfo = (props: PropsType) => {
  const { latitude, longitude } = props.info
  const info = props.info
  console.log(info)
  function removeTAndTime(dateTime: string): string {
    const indexOfT = dateTime.indexOf('T')
    if (indexOfT !== -1) {
      return dateTime.substring(0, indexOfT)
    }
    return dateTime
  }
  const infoItems = [
    { icon: 'count', info: getRealEstateType(info.realEstateType) },
    { icon: 'area', info: `방 ${info.roomNumber} 화 ${info.toiletNumber}` },
    { icon: 'detail', info: `${info.area}m2 (${info.pyeong} 평)` },
    {
      icon: 'floor',
      info:
        info.itemFloor !== 0
          ? `${info.itemFloor} 층 / ${info.buildingFloor} 층`
          : '단독',
    },
    { icon: 'elevator', info: info.haveElevator ? '있음' : '없음' },
    {
      icon: 'contract',
      info:
        info.transactionType === 3
          ? `계약기간  ${info.contractMonths} 개월`
          : '매매',
    },
    {
      icon: 'parking',
      info:
        info.parkingRate === 0
          ? '주차불가'
          : `주차대수  ${info.parkingRate} 대`,
    },
    {
      icon: 'house',
      info: `
      입주가능일 \n 
      ${removeTAndTime(info.moveInDate)}`,
    },

    // {
    //   icon: 'detail',
    //   info: `관리비 ${numberToMoney(info.administrationCost)}`,
    // },
    // { icon: 'detail', info: `${info.area}m2` },
  ]

  const adminFeeInfo = [
    { icon: 'elec', name: '전기' },
    { icon: 'gas', name: '가스' },
    { icon: 'water', name: '수도' },
    { icon: 'internet', name: '인터넷' },
    { icon: 'tv', name: 'TV' },
  ]

  const additionalInfo = [
    { icon: 'air', name: '에어컨' },
    { icon: 'refrigerator', name: '냉장고' },
    { icon: 'washing-machine', name: '세탁기' },
    { icon: 'gas', name: '가스레인지' },
    { icon: 'induction', name: '인덕션' },
    { icon: 'microwave', name: '전자레인지' },
    { icon: 'desk', name: '책상' },
    { icon: 'bookshelf', name: '책장' },
    { icon: 'bed', name: '침대' },
    { icon: 'closet', name: '옷장' },
    { icon: 'shoe', name: '신발장' },
    { icon: 'sink', name: '싱크대' },
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
      {info.administrationCost !== 0 && (
        <>
          <r.TitleContainer>
            <div className="title">관리비 항목</div>
            <hr className="underline" />
          </r.TitleContainer>
          <r.AdditionalWrapper>
            <r.AdminFeeContainer>
              {info.itemAdministrationFeeList.map((item, index) => (
                <div className="info-box" key={index}>
                  <img
                    className="icon"
                    src={`/icon/icon_room_info_fee_${adminFeeInfo[item - 1].icon}.png`}
                    alt=""
                  />
                  <div className="name" key={index}>
                    {adminFeeInfo[item - 1].name}
                  </div>
                </div>
              ))}
            </r.AdminFeeContainer>
          </r.AdditionalWrapper>
        </>
      )}
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
