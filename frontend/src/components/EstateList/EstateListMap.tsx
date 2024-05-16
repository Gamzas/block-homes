import { useEffect } from 'react'
import * as e from '@components/EstateList/styles/EstateListMapStyle'
import { renderToString } from 'react-dom/server'
import CustomOverlay from '@components/EstateList/CustomOverlay'
import useCurrentLocation from '@/hooks/useCurrentLocation'
import { useAtom } from 'jotai'
import {
  currentCoordAtom,
  estateItemListAtom,
  selectedItemAtom,
} from '@/stores/atoms/EstateListStore'
import EstateItemCard from './EstateItemCard'
import { EstateItemListType } from '@/types/api/itemType'

declare global {
  interface Window {
    kakao: any
  }
}
const { kakao } = window

const EstateListMap = () => {
  // setLocation => 지도의 중심좌표를 설정하기 위한 함수
  const { setLocation } = useCurrentLocation()

  const [coord] = useAtom(currentCoordAtom)

  // 부동산 매물 리스트
  const [estateItemArr] = useAtom(estateItemListAtom)
  const estateItemList: EstateItemListType[] = estateItemArr.itemList

  // 상세보기 선택한 부동산
  const [item, setItem] = useAtom(selectedItemAtom)

  // 닫기 버튼
  const handleDetailCardClose = () => {
    setItem('not')
  }

  useEffect(() => {
    setItem('not')
  }, [])

  useEffect(() => {
    // 지도생성
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(coord.latitude, coord.longitude),
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

    //--------------------------------------

    // 지도 중심이 변경될 때 호출되는 이벤트 리스너를 추가합니다.
    kakao.maps.event.addListener(map, 'center_changed', () => {
      const center = map.getCenter()
      setLocation({
        latitude: center.Ma,
        longitude: center.La,
      })
      //-----------------------------------
      // 지도의 현재 영역을 얻어옵니다
      // const bounds = map.getBounds()
      // // 영역의 남서쪽 좌표를 얻어옵니다
      // const swLatLng = bounds.getSouthWest()

      // // 영역의 북동쪽 좌표를 얻어옵니다
      // const neLatLng = bounds.getNorthEast()
      // console.log(swLatLng, neLatLng)
      //-----------------------------------
    })

    //--------------------------------------

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    )

    // 지도 마커 생성
    const markerPosition = new kakao.maps.LatLng(
      coord.latitude,
      coord.longitude,
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
            <CustomOverlay condition={estateItem.reportRank} />,
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
  }, [coord, estateItemList])

  return (
    <e.EstateMapContainer id="map">
      {item !== 'not' && (
        <e.DetailCardContainer id="card-container">
          <div className="card-background" onClick={handleDetailCardClose} />
          <EstateItemCard {...item} />
        </e.DetailCardContainer>
      )}
    </e.EstateMapContainer>
  )
}

export default EstateListMap
