import * as r from '@pages/style/RealEstatePageStyle'
import Header from '@/common/Header'
import ItemSafetyCard from '@/components/EstateDetailPage/ItemSafetyCard'
import DetailTabMenu from '@/components/EstateDetailPage/DetailTabMenu'
import RoomInfo from '@/components/EstateDetailPage/RoomInfo'
import DetailFooter from '@/components/EstateDetailPage/DetailFooter'
import { useAtom } from 'jotai'
import { selectedItemAtom } from '@/stores/atoms/EstateListStore'

const RealEstateDetailPage = () => {
  const [selectedItem] = useAtom(selectedItemAtom)
  return (
    <r.Container>
      {selectedItem !== 'not' ? (
        <>
          <Header title={'매물 상세 조회'} isSearch={false} rightIconSrc={''} />
          <DetailTabMenu />
          <ItemSafetyCard condition={selectedItem.condition} />
          <RoomInfo info={selectedItem}/>
          <DetailFooter />
        </>
      ) : (
        <div>잘못된접근입니다.</div>
      )}
    </r.Container>
  )
}

export default RealEstateDetailPage
