import { useEffect, useState } from 'react';
import * as e from '@components/EstateList/styles/EstateListMapStyle';
import { renderToString } from 'react-dom/server';
import CustomOverlay from '@components/EstateList/CustomOverlay';
import useCurrentLocation from '@/hooks/useCurrentLocation';
import { useAtom } from 'jotai';
import {
  currentCoordAtom,
  estateFilterAtom,
  selectedItemAtom,
} from '@/stores/atoms/EstateListStore';
import EstateItemCard from './EstateItemCard';
import { EstateItemListType } from '@/types/api/itemType';
import { useGetEstateItems } from '@/apis/itemApi';
import ItemLoading from '@/common/ItemLoading';
import NoItems from '@/common/NoItems';
import { useParams } from 'react-router-dom';
import { calculateDistance } from '@/utils/locationUtil';
import { ReqCoordType } from '@/types/components/estateListType';

declare global {
  interface Window {
    kakao: any;
  }
}
const { kakao } = window;

const EstateListMap = () => {
  // setLocation => 지도의 중심좌표를 설정하기 위한 함수
  const { setLocation } = useCurrentLocation();
  const [filter] = useAtom(estateFilterAtom);
  const [coord] = useAtom(currentCoordAtom);

  const [reqCoord, setReqCoord] = useState<ReqCoordType | null>(null);
  const [previousCenter, setPreviousCenter] = useState({
    latitude: coord.latitude,
    longitude: coord.longitude,
  });

  const { category } = useParams();
  const { data, isLoading, error } = useGetEstateItems(
    Number(category),
    filter,
    reqCoord || {
      northEastLatitude: 0,
      northEastLongitude: 0,
      southWestLatitude: 0,
      southWestLongitude: 0,
    }
  );
    console.log(data)
  const estateItemList: EstateItemListType[] = data?.itemList || [];
  const [item, setItem] = useAtom(selectedItemAtom);

  const distanceThreshold = 2.5; // 2.5km

  const handleDetailCardClose = () => {
    setItem('not');
  };

  useEffect(() => {
    // 지도생성
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(coord.latitude, coord.longitude),
      level: 3,
      animate: true,
      isPanto: true,
    };
    const map = new kakao.maps.Map(container, options);

    // 지도 확대 최대 레벨 설정
    map.setMaxLevel(10);

    // 지도 줌 컨트롤러
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const imageSrc = '/image/image_location_pin.png';
    const imageSize = new kakao.maps.Size(48, 48);
    const imageOption = { offset: new kakao.maps.Point(32, 45) };

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    // 지도 마커 생성
    const markerPosition = new kakao.maps.LatLng(coord.latitude, coord.longitude);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커이미지 설정
    });
    marker.setMap(map);

    // 초기 reqCoord 설정
    const bounds = map.getBounds();
    const swLatLng = bounds.getSouthWest();
    const neLatLng = bounds.getNorthEast();
    setReqCoord({
      northEastLatitude: neLatLng.Ma,
      northEastLongitude: neLatLng.La,
      southWestLatitude: swLatLng.Ma,
      southWestLongitude: swLatLng.La,
    });

    // 지도 중심이 변경될 때 호출되는 이벤트 리스너를 추가합니다.
    kakao.maps.event.addListener(map, 'center_changed', () => {
      const center = map.getCenter();
      const newCenter = { latitude: center.Ma, longitude: center.La };
      setLocation(newCenter);

      const distance = calculateDistance(
        previousCenter.latitude,
        previousCenter.longitude,
        newCenter.latitude,
        newCenter.longitude,
      );

      if (distance >= distanceThreshold) {
        setPreviousCenter(newCenter);
        const bounds = map.getBounds();
        const swLatLng = bounds.getSouthWest();
        const neLatLng = bounds.getNorthEast();
        console.log('new', swLatLng, neLatLng);

        setReqCoord({
          northEastLatitude: neLatLng.Ma,
          northEastLongitude: neLatLng.La,
          southWestLatitude: swLatLng.Ma,
          southWestLongitude: swLatLng.La,
        });
      }
    });

    if (estateItemList.length) {
      estateItemList.forEach(estateItem => {
        const position = new kakao.maps.LatLng(estateItem.latitude, estateItem.longitude);
        const overlayDiv = document.createElement('div');
        overlayDiv.innerHTML = renderToString(<CustomOverlay condition={estateItem.reportRank} />);
        const handleOverlayClick = () => {
          setItem(estateItem);
        };

        const customOverlay = new kakao.maps.CustomOverlay({
          position: position,
          content: overlayDiv,
          xAnchor: 0.5,
          yAnchor: 0.91,
          clickable: true,
          zIndex: 4,
        });
        const circleElement = overlayDiv.querySelector('.circle');
        if (circleElement) {
          circleElement.addEventListener('click', handleOverlayClick);
        }

        customOverlay.setMap(map);
      });
    }
  }, [coord, estateItemList]);

  if (isLoading) {
    return <ItemLoading />;
  }

  // if (error || !data || !data.itemList) {
  //   return (
  //     <NoItems
  //       src={'/image/image_warning_pig.png'}
  //       alarmText={'데이터를 불러오는 중 오류가 발생했습니다.'}
  //     />
  //   );
  // }

  return (
    <e.EstateMapContainer id="map">
      {item !== 'not' && (
        <e.DetailCardContainer id="card-container">
          <div className="card-background" onClick={handleDetailCardClose} />
          <EstateItemCard {...item} />
        </e.DetailCardContainer>
      )}
    </e.EstateMapContainer>
  );
};

export default EstateListMap;
