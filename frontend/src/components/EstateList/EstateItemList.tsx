import useCurrentLocation from '@/hooks/useCurrentLocation'
import CurrentStatus from './CurrentStatus'
import EstateItemCard from './EstateItemCard'
import { useEffect, useRef } from 'react'
import EstateItemFilter from './EstateItemFilter'
import * as l from '@components/EstateList/styles/EstateItemListStyle'
import { useAtom } from 'jotai'
import {
  estateItemListAtom,
  filterAtom,
  mapAtom,
} from '@/stores/atoms/EstateListStore'
import EstateListMap from './EstateListMap'
import NoItems from '@common/NoItems'
import { EstateItemListType } from '@/types/api/itemType'

const EstateItemList = () => {
  const { getCurrentLocation } = useCurrentLocation()
  const [filter, setFilter] = useAtom(filterAtom)
  const [menu] = useAtom(mapAtom)
  const [items] = useAtom(estateItemListAtom)
  useEffect(() => {
    setFilter(false)
  }, [setFilter])
  const setMapCenterToUserLocation = useRef(null)

  const handleLocationClick = () => {
    getCurrentLocation()
    if (setMapCenterToUserLocation.current) {
      setMapCenterToUserLocation.current.setCenter()
    }
  }

  const estateItemList: EstateItemListType[] = items.itemList || []

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
