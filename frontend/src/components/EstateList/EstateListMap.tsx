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
  const { setLocation } = useCurrentLocation();
  const [filter] = useAtom(estateFilterAtom);
  const [coord] = useAtom(currentCoordAtom);

  const [reqCoord, setReqCoord] = useState<ReqCoordType>({
    northEastLatitude: 0,
    northEastLongitude: 0,
    southWestLatitude: 0,
    southWestLongitude: 0,
  });
  const [previousCenter, setPreviousCenter] = useState({
    latitude: coord.latitude,
    longitude: coord.longitude,
  });

  const { category } = useParams();
  const { data, isLoading, error } = useGetEstateItems(
    Number(category),
    filter,
    reqCoord,
  );
  const estateItemList: EstateItemListType[] = data?.itemList || [];
  const [item, setItem] = useAtom(selectedItemAtom);

  const distanceThreshold = 2.5; // 2.5km

  const handleDetailCardClose = () => {
    setItem('not');
  };

  useEffect(() => {
    const container = document.getElementById('map');
    if (!container) return; // container가 존재하는지 확인

    const options = {
      center: new kakao.maps.LatLng(coord.latitude, coord.longitude),
      level: 3,
      animate: true,
      isPanto: true,
    };
    const map = new kakao.maps.Map(container, options);

    map.setMaxLevel(10);

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    const imageSrc = '/image/image_location_pin.png';
    const imageSize = new kakao.maps.Size(48, 48);
    const imageOption = { offset: new kakao.maps.Point(32, 45) };

    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    const markerPosition = new kakao.maps.LatLng(coord.latitude, coord.longitude);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    marker.setMap(map);

    const bounds = map.getBounds();
    const swLatLng = bounds.getSouthWest();
    const neLatLng = bounds.getNorthEast();
    setReqCoord({
      northEastLatitude: neLatLng.Ma,
      northEastLongitude: neLatLng.La,
      southWestLatitude: swLatLng.Ma,
      southWestLongitude: swLatLng.La,
    });

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
        setReqCoord({
          northEastLatitude: neLatLng.Ma,
          northEastLongitude: neLatLng.La,
          southWestLatitude: swLatLng.Ma,
          southWestLongitude: swLatLng.La,
        });
      }
    });

    if (estateItemList.length) {
      estateItemList.forEach((estateItem) => {
        const position = new kakao.maps.LatLng(estateItem.latitude, estateItem.longitude);
        const overlayDiv = document.createElement('div');
        overlayDiv.innerHTML = renderToString(
          <CustomOverlay condition={estateItem.reportRank} />,
        );
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

  if (error || !data || !data.itemList) {
    return (
      <NoItems
        src={'/image/image_warning_pig.png'}
        alarmText={'데이터를 불러오는 중 오류가 발생했습니다.'}
      />
    );
  }

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
