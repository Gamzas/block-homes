import { useAtom } from 'jotai'
import Footer from '@/common/Footer'
import Header from '@/common/Header'
import { mapAtom } from '@/stores/atoms/EstateListStore'
import * as r from '@pages/style/RealEstatePageStyle'
import EstateItemList from '@/components/EstateList/EstateItemList'

const RealEstatePage = () => {
  const [menu] = useAtom(mapAtom)
  return (
    <r.Container>
      <Header
        title={'매물 조회하기'}
        isSearch={true}
        rightIconSrc={menu ? '/icon/icon_map.png' : '/icon/icon_list.png'}
      />
      <EstateItemList />
      <Footer />
    </r.Container>
  )
}

export default RealEstatePage
