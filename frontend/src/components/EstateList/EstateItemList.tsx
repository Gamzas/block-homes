import useCurrentLocation from '@/hooks/useCurrentLocation'
import CurrentStatus from './CurrentStatus'
import EstateItemCard from './EstateItemCard'
import { useEffect } from 'react'
import EstateItemFilter from './EstateItemFilter'
import * as l from '@components/EstateList/styles/EstateItemListStyle'
import { useAtom } from 'jotai'
import { filterAtom, mapAtom } from '@/stores/atoms/EstateListStore'
import EstateListMap from './EstateListMap'
import NoItems from '@common/NoItems'
import { EstateItemListType } from '@/types/api/itemType'
import { useParams } from 'react-router-dom'
import { useGetEstateItems } from '@/apis/itemApi'
import ItemLoading from '@/common/ItemLoading'

const EstateItemList = () => {
  const { category } = useParams()
  const { getCurrentLocation } = useCurrentLocation()
  const [filter, setFilter] = useAtom(filterAtom)
  const [menu] = useAtom(mapAtom)
  useEffect(() => {
    setFilter(false)
    getCurrentLocation()
  }, [])
  const { data, isLoading, error } = useGetEstateItems(Number(category))
  if (isLoading) {
    return <ItemLoading />
  }

  if (error || !data || !data.itemList) {
    return (
      <NoItems
        src={'/image/image_warning_pig.png'}
        alarmText={'데이터를 불러오는 중 오류가 발생했습니다.'}
      />
    )
  }

  const estateItemList: EstateItemListType[] = data.itemList
  return (
    <l.EstateItemListContainer>
      <l.StatusBarContainer>
        <CurrentStatus getCurrentLocation={getCurrentLocation} />
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
