import { useEffect } from 'react'
import * as e from '@components/EstateList/styles/EstateListMapStyle'
import { renderToString } from 'react-dom/server'
import CustomOverlay from '@components/EstateList/CustomOverlay'
import useCurrentLocation from '@/hooks/useCurrentLocation'
import { useAtom } from 'jotai'
import { estateItemListAtom } from '@/stores/atoms/estateListStore'

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

  useEffect(() => {
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
    }
    const map = new kakao.maps.Map(container, options)

    // 지도 확대 최대 레벨 설정
    map.setMaxLevel(5)

    // 지도 줌 컨트롤러
    const zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)

    // 지도 마커 생성
    const markerPosition = new kakao.maps.LatLng(
      location.location.latitude,
      location.location.longitude,
    )

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    })
    marker.setMap(map)

    // 커스텀 오버레이 렌더링
    // 오버레이 위치 리스트에 대해 처리
    estateItemList.forEach(({ latitude, longitude, condition }) => {
      const position = new kakao.maps.LatLng(latitude, longitude)
      const overlayString = renderToString(
        <CustomOverlay condition={condition} />,
      )

      const customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: overlayString,
        xAnchor: 0.5,
        yAnchor: 0.91,
        clickable: true,
      })

      customOverlay.setMap(map)
      kakao.maps.event.addListener(customOverlay, 'click', function () {
        // 클릭 시 수행할 동작
        console.log('오버레이 클릭!')
      })
    })
  }, [location])

  return (
    <>
      <e.EstateMapContainer id="map"></e.EstateMapContainer>
    </>
  )
}

export default EstateListMap
