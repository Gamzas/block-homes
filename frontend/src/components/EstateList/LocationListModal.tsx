import { GeocoderResult } from '@/types/kakaomapType'
import * as m from '@components/EstateList/styles/LocationListModalStyle'
interface PropsType {
  locationList: GeocoderResult[]
  onSelect: (item: GeocoderResult) => void
  onClose: () => void
}
const LocationListModal = (props: PropsType) => {
  const { locationList, onSelect, onClose } = props
  return (
    <m.ModalWrapper>
      <m.ModalListContainer>
        <m.LocationTitleContainer>
          <img
            className="title-img"
            src="/image/image_profile.png"
            alt="돼지쨩"
          />
          <div className="title">동네를 선택해주세요.</div>
        </m.LocationTitleContainer>
        {locationList.map((item, index) => (
          <m.ModalListBox key={index} onClick={() => onSelect(item)}>
            {item.address_name}
          </m.ModalListBox>
        ))}
      </m.ModalListContainer>
    </m.ModalWrapper>
  )
}

export default LocationListModal
