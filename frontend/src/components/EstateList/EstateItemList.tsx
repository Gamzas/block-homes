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
import NoEstateItem from './NoEstateItem'
import { useParams } from 'react-router-dom'

const EstateItemList = () => {
  const { getCurrentLocation } = useCurrentLocation()
  const [filter] = useAtom(filterAtom)
  const [menu] = useAtom(mapAtom)
  const [estateItemList] = useAtom(estateItemListAtom)
  useEffect(() => {
    getCurrentLocation()
  }, [])

  const { category } = useParams()
  console.log(category)
  return (
    <l.EstateItemListContainer>
      <l.StatusBarContainer>
        <CurrentStatus getCurrentLocation={getCurrentLocation} />
      </l.StatusBarContainer>
      <l.EstateItemListContainer>
        {menu ? (
          estateItemList === null || estateItemList.length === 0 ? (
            // TODO 매물 없을때 컴포넌트 분리해서 완성하기
            <NoEstateItem />
          ) : (
            <>
              {estateItemList.map((item, index) => (
                <EstateItemCard key={index} itemList={item.itemList[0]} />
              ))}
            </>
          )
        ) : (
          // WARNING
          <>{/* <EstateListMap /> */}</>
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
