import useCurrentLocation from '@/hooks/useCurrentLocation'
import CurrentStatus from './CurrentStatus'
import EstateItemCard from './EstateItemCard'
import { useEffect, useRef, useState } from 'react'
import EstateItemFilter from './EstateItemFilter'
import * as l from '@components/EstateList/styles/EstateItemListStyle'
import { useAtom, useSetAtom } from 'jotai'
import {
  estateFilterAtom,
  estateItemListAtom,
  filterAtom,
  mapAtom,
  mapCenterCoordAtom,
} from '@/stores/atoms/EstateListStore'
import EstateListMap from './EstateListMap'
import NoItems from '@common/NoItems'
import { EstateItemListType } from '@/types/api/itemType'
import { useParams } from 'react-router-dom'
import { useGetEstateItems } from '@/apis/itemApi'
import ItemLoading from '@/common/ItemLoading'
import { calculateBoundaries } from '@/utils/locationUtil'
import { ReqCoordType } from '@/types/components/estateListType'

const EstateItemList = () => {
  const { category } = useParams()
  const { getCurrentLocation } = useCurrentLocation()
  const [filter, setFilter] = useAtom(filterAtom)
  const [itemFilter] = useAtom(estateFilterAtom)
  const [menu] = useAtom(mapAtom)
  const [markerCoord] = useAtom(mapCenterCoordAtom)

  useEffect(() => {
    setFilter(false)
    // getCurrentLocation()
  }, [setFilter])

  const boundaries = calculateBoundaries(
    markerCoord.latitude,
    markerCoord.longitude,
    5,
  )
  const [currentBoundary, setCurrentBoundary] =
    useState<ReqCoordType>(boundaries)

  useEffect(() => {
    const boundary = calculateBoundaries(
      markerCoord.latitude,
      markerCoord.longitude,
      5,
    )
    setCurrentBoundary(boundary)
  }, [markerCoord])

  const setMapCenterToUserLocation = useRef(null)

  const handleLocationClick = () => {
    getCurrentLocation()
    if (setMapCenterToUserLocation.current) {
      setMapCenterToUserLocation.current.setCenter()
    }
  }

  // const { data, isLoading, error } = useGetEstateItems(
  //   Number(category),
  //   itemFilter,
  //   {
  //     northEastLatitude: 35.20793645842205,
  //     northEastLongitude: 126.8243731285463,
  //     southWestLatitude: 35.167213022923335,
  //     southWestLongitude: 126.79021349478826,
  //   },
  // )

  // if (isLoading) {
  //   return <ItemLoading />
  // }

  // if (error || !data || !data.itemList) {
  //   return (
  //     <NoItems
  //       src={'/image/image_warning_pig.png'}
  //       alarmText={'데이터를 불러오는 중 오류가 발생했습니다.'}
  //     />
  //   )
  // }

  // console.log(data)
  console.log('리스트 렌더링')

  // const estateItemList: EstateItemListType[] = data.itemList

  const estateItemList: EstateItemListType[] = []
  return (
    <l.EstateItemListContainer>
      <l.StatusBarContainer>
        <CurrentStatus handleLocationClick={handleLocationClick} />
      </l.StatusBarContainer>
      {menu ? (
        estateItemList === undefined || estateItemList.length === 0 ? (
          <NoItems
            src={'/image/image_warning_pig.png'}
            alarmText={'해당 지역에 매물이 없습니다.'}
          />
        ) : (
          <>
            <l.EstateItemCardsContainer>
              {estateItemList.map((item, index) => (
                <EstateItemCard key={index} {...item} />
              ))}
            </l.EstateItemCardsContainer>
            {filter && (
              <l.EstateFilterContainer>
                <EstateItemFilter />
              </l.EstateFilterContainer>
            )}
          </>
        )
      ) : (
        <EstateListMap />
      )}
    </l.EstateItemListContainer>
  )
}

export default EstateItemList
