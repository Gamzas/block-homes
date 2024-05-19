import { useEffect, useState, useRef, forwardRef } from 'react'
import * as e from '@components/EstateList/styles/EstateListMapStyle'
import { renderToString } from 'react-dom/server'
import CustomOverlay from '@components/EstateList/CustomOverlay'
import { useAtom } from 'jotai'
import {
  selectedItemAtom,
  currentCoordAtom,
  mapCenterCoordAtom,
  userCoordAtom,
  estateItemListAtom,
} from '@/stores/atoms/EstateListStore'
import EstateItemCard from './EstateItemCard'
import { EstateItemListType } from '@/types/api/itemType'

declare global {
  interface Window {
    kakao: any
  }
}
const { kakao } = window

const EstateListMap = forwardRef((props, ref) => {
  const [coord] = useAtom(currentCoordAtom)
  const [location, setLocation] = useAtom(mapCenterCoordAtom)
  const [userCoord] = useAtom(userCoordAtom)
  const [items] = useAtom(estateItemListAtom)
  console.log(items)
  const estateItemList: EstateItemListType[] = items.itemList || []
  const [marker, setMarker] = useState(null)
  const [item, setItem] = useAtom(selectedItemAtom)

  const mapRef = useRef(null)
  const initialLoad = useRef(true)
  const centerChangeTimeout = useRef(null)
  const isUserInteraction = useRef(false)

  const handleDetailCardClose = () => {
    setItem('not')
  }

  useEffect(() => {
    if (!initialLoad.current) return
    if (marker) {
      marker.setMap(null) // 기존 마커 제거
    }
    const container = document.getElementById('map')
    const options = {
      center: new kakao.maps.LatLng(userCoord.latitude, userCoord.longitude),
      level: 3,
      animate: true,
      isPanto: true,
    }

    const map = new kakao.maps.Map(container, options)
    mapRef.current = map
    initialLoad.current = false

    map.setMaxLevel(7)
    const zoomControl = new kakao.maps.ZoomControl()
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)

    const imageSrc = '/image/image_location_pin.png'
    const imageSize = new kakao.maps.Size(48, 48)
    const imageOption = { offset: new kakao.maps.Point(32, 45) }

    kakao.maps.event.addListener(map, 'center_changed', () => {
      if (centerChangeTimeout.current) {
        clearTimeout(centerChangeTimeout.current)
      }
      centerChangeTimeout.current = setTimeout(() => {
        if (isUserInteraction.current) {
          const center = map.getCenter()
          setLocation({
            latitude: center.Ma,
            longitude: center.La,
          })
        }
      }, 100)
    })

    kakao.maps.event.addListener(map, 'dragstart', () => {
      isUserInteraction.current = true
    })

    kakao.maps.event.addListener(map, 'dragend', () => {
      isUserInteraction.current = false
    })

    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption,
    )
    const markerPosition = new kakao.maps.LatLng(
      coord.latitude,
      coord.longitude,
    )
    if (marker) {
      marker.setMap(null) // 기존 마커 제거
    }
    const initialMarker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    })
    initialMarker.setMap(map)
    setMarker(initialMarker)
  }, [])

  useEffect(() => {
    if (initialLoad.current) return

    const map = mapRef.current

    if (marker) {
      marker.setMap(null) // 기존 마커 제거
    }
    const markerImage = new kakao.maps.MarkerImage(
      '/image/image_location_pin.png',
      new kakao.maps.Size(48, 48),
      { offset: new kakao.maps.Point(32, 45) },
    )
    const markerPosition = new kakao.maps.LatLng(
      coord.latitude,
      coord.longitude,
    )
    const newMarker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    })
    newMarker.setMap(map)
    setMarker(newMarker)

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
      if (circleElement) {
        circleElement.addEventListener('click', handleOverlayClick)
      }

      customOverlay.setMap(map)
    })
  }, [coord, items])

  useEffect(() => {
    const map = mapRef.current
    if (marker) {
      marker.setMap(null) // 기존 마커 제거
    }
    if (!isUserInteraction.current) {
      const setCenter = () => {
        const moveLatLon = new kakao.maps.LatLng(
          location.latitude,
          location.longitude,
        )
        map.panTo(moveLatLon)
      }
      setCenter()
    }
  }, [location])

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
})

export default EstateListMap
