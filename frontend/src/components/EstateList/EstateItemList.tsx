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
import NoItems from '@common/NoItems'

const EstateItemList = () => {
  const { getCurrentLocation } = useCurrentLocation()
  const [filter] = useAtom(filterAtom)
  const [menu] = useAtom(mapAtom)
  const [estateItemList] = useAtom(estateItemListAtom)
  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <l.EstateItemListContainer>
      <l.StatusBarContainer>
        <CurrentStatus getCurrentLocation={getCurrentLocation} />
      </l.StatusBarContainer>
      {menu ? (
        estateItemList === null || estateItemList.length === 0 ? (
          // TODO 매물 없을때 컴포넌트 분리해서 완성하기
          <NoItems
            src={'/image/image_warning_pig.png'}
            alarmText={'해당 지역에 매물이 없습니다.'}
          />
        ) : (
          <>
            {estateItemList.map((item, index) => (
              <EstateItemCard key={index} {...item} />
            ))}
          </>
        )
      ) : (
        <EstateListMap />
      )}
      {filter && (
        <l.EstateFilterContainer>
          <EstateItemFilter />
        </l.EstateFilterContainer>
      )}
    </l.EstateItemListContainer>
  )
}

export default EstateItemList
