import * as r from '@pages/style/RealEstatePageStyle'
import Header from '@/common/Header'
import ItemSafetyCard from '@/components/EstateDetailPage/ItemSafetyCard'
import DetailTabMenu from '@/components/EstateDetailPage/DetailTabMenu'
import RoomInfo from '@/components/EstateDetailPage/RoomInfo'
import DetailFooter from '@/components/EstateDetailPage/DetailFooter'
import { useAtom } from 'jotai'
import { selectedItemAtom } from '@/stores/atoms/EstateListStore'
import DetailInfo from '@/components/EstateDetailPage/DetailInfo'

const RealEstateDetailPage = () => {
  const [selectedItem] = useAtom(selectedItemAtom)
  return (
    <r.Container>
      {selectedItem !== 'not' ? (
        <>
          <Header title={'매물 상세 조회'} isSearch={false} rightIconSrc={''} />
          <DetailTabMenu />
          <ItemSafetyCard condition={selectedItem.condition} />
          <RoomInfo info={selectedItem} />
          <DetailFooter />
        </>
      ) : (
        <>
          <Header title={'매물 상세 조회'} isSearch={false} rightIconSrc={''} />
          <DetailInfo />
        </>
      )}
    </r.Container>
  )
}

export default RealEstateDetailPage
