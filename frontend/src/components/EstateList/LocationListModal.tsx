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
          <m.CloseBtnContainer onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              id="close"
            >
              <path
                fill="#686767b5"
                d="M15 3a12 12 0 1 0 12 12A12 12 0 0 0 15 3Zm3.71 14.29a1 1 0 0 1 0 1.42 1 1 0 0 1-1.42 0L15 16.41l-2.29 2.3a1 1 0 0 1-1.42 0 1 1 0 0 1 0-1.42l2.3-2.29-2.3-2.29a1 1 0 0 1 1.42-1.42l2.29 2.3 2.29-2.3a1 1 0 0 1 1.42 1.42L16.41 15Z"
              ></path>
            </svg>
          </m.CloseBtnContainer>
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
