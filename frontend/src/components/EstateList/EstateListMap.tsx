import { useEffect } from 'react'
import * as e from '@components/EstateList/styles/EstateListMapStyle'
import { renderToString } from 'react-dom/server'
import CustomOverlay from '@components/EstateList/CustomOverlay'
import useCurrentLocation from '@/hooks/useCurrentLocation'
import { useAtom } from 'jotai'
import {
  estateItemListAtom,
  selectedItemAtom,
} from '@/stores/atoms/EstateListStore'
import EstateItemCard from './EstateItemCard'

declare global {
  interface Window {
    kakao: any
  }
}
const { kakao } = window

const EstateListMap = () => {
  const { location, getCurrentLocation } = useCurrentLocation()
  // 부동산 매물 리스트
  const [estateItemList] = useAtom(estateItemListAtom)
  // 상세보기 선택한 부동산
  const [item, setItem] = useAtom(selectedItemAtom)

  // 닫기 버튼
  const handleDetailCardClose = () => {
    setItem('not')
  }

  useEffect(() => {
    setItem('not')
    getCurrentLocation()
  }, [])

  useEffect(() => {
    // 지도생성
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(
        location.location.latitude,
        location.location.longitude,
      ),
      level: 3,
      animate: true,
      isPanto: true,
    }
    const map = new kakao.maps.Map(container, options)

    // 지도 확대 최대 레벨 설정
    map.setMaxLevel(10)

    // 지도 줌 컨트롤러
    const zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)

    const imageSrc = '/image/image_location_pin.png', // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(48, 48), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(32, 45) } // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    )

    // 지도 마커 생성
    const markerPosition = new kakao.maps.LatLng(
      location.location.latitude,
      location.location.longitude,
    )

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커이미지 설정
    })
    marker.setMap(map)

    // 커스텀 오버레이 렌더링
    // 오버레이 위치 리스트에 대해 처리
    {
      estateItemList !== null &&
        estateItemList.forEach(estateItem => {
          const position = new kakao.maps.LatLng(
            estateItem.latitude,
            estateItem.longitude,
          )
          const overlayDiv = document.createElement('div')
          overlayDiv.innerHTML = renderToString(
            <CustomOverlay condition={estateItem.condition} />,
          )
          const handleOverlayClick = () => {
            setItem(estateItem)
          }

          const customOverlay = new kakao.maps.CustomOverlay({
            position: position,
            content: overlayDiv,
            xAnchor: 0.5,
            yAnchor: 0.91,
            clickable: true,
            zIndex: 4,
          })
          const circleElement = overlayDiv.querySelector('.circle')
          {
            circleElement &&
              circleElement.addEventListener('click', handleOverlayClick)
          }

          customOverlay.setMap(map)
        })
    }
  }, [location, estateItemList])

  return (
    <>
      <e.EstateMapContainer id="map">
        {item !== 'not' && (
          <e.DetailCardContainer id="card-container">
            <div className="card-background" onClick={handleDetailCardClose} />
            <EstateItemCard {...item} />
            {/* DELETE 닫기 버튼 삭제하기 */}
            {/* <e.CloseCardContainer>
              <div className="closeBtn" onClick={handleDetailCardClose}>
                닫기
              </div>
            </e.CloseCardContainer> */}
            {/* DELETE div 삭제 */}
            {/* <div className="card"></div> */}
          </e.DetailCardContainer>
        )}
      </e.EstateMapContainer>
    </>
  )
}

export default EstateListMap
