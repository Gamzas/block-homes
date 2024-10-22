import Footer from '@/common/Footer'
import Header from '@/common/Header'
import ItemList from '@/components/FavoriteItemsPage/ItemList'
import * as f from '@pages/style/FavoriteItemsPageStyle'

const FavoriteItemsPage = () => {
  return (
    <f.container>
      <Header title={'나의 관심매물'} isSearch={false} rightIconSrc="" />
      <ItemList />
      <Footer />
    </f.container>
  )
}

export default FavoriteItemsPage
