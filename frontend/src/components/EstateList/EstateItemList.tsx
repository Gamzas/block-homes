import useCurrentLocation from '@/hooks/useCurrentLocation'
import CurrentStatus from './CurrentStatus'
import EstateItemCard from './EstateItemCard'
import { useEffect } from 'react'
import EstateItemFilter from './EstateItemFilter'
import * as l from '@components/EstateList/styles/EstateItemListStyle'
import { useAtom } from 'jotai'
import {
  estateItemListAtom,
  filterAtom,
  mapAtom,
} from '@/stores/atoms/EstateListStore'
import EstateListMap from './EstateListMap'

const EstateItemList = () => {
  const { currentPosition, getCurrentLocation } = useCurrentLocation()
  const [filter] = useAtom(filterAtom)
  const [menu] = useAtom(mapAtom)
  const [estateItemList] = useAtom(estateItemListAtom)
  useEffect(() => {
    getCurrentLocation()
  }, [])
  return (
    <>
      <l.StatusBarContainer>
        <CurrentStatus
          getCurrentLocation={getCurrentLocation}
          currentPosition={currentPosition}
        />
      </l.StatusBarContainer>
      <l.EstateItemListContainer>
        {menu ? (
          <>
            {estateItemList.map((item, index) => (
              <EstateItemCard key={index} {...item} />
            ))}
          </>
        ) : (
          <l.EstateMapContainer>
            <EstateListMap />
          </l.EstateMapContainer>
        )}
        {filter && (
          <l.EstateFilterContainer>
            <EstateItemFilter />
          </l.EstateFilterContainer>
        )}
      </l.EstateItemListContainer>
    </>
  )
}

export default EstateItemList
