import * as i from '@components/FavoriteItemsPage/style/ItemListStyle'
import NoItems from './NoItems'
import EstateItemCard from '../EstateList/EstateItemCard'
import { useState } from 'react'

const ItemList = () => {
  const FavoriteItems = [
    {
      condition: 'normal',
      address: '남동길 30번길 13 3층',
      infos: ['남향', '교육시설', '역세권'],
      leaseType: '전세',
      price: '3억',
      roomSize: '37',
      roomCount: '투룸',
      createDate: '2024년 3월 21일',
      latitude: 35.2097245,
      longitude: 126.7805472,
    },
    {
      condition: 'bad',
      address: '광주광역시 광산구 오선동',
      infos: ['남향', '교육시설', '역세권'],
      leaseType: '매매',
      price: '3억',
      roomSize: '37',
      roomCount: '투룸',
      createDate: '2024년 3월 21일',
      latitude: 35.205615,
      longitude: 126.812546,
    },
  ]

  return FavoriteItems.length !== 0 ? (
    <i.ItmeListWrapper>
      <i.EditContainer>
        <div>편집</div>
      </i.EditContainer>
      <i.ItemContainer>
        {FavoriteItems.map((item, index) => (
          <EstateItemCard key={index} {...item} />
        ))}
      </i.ItemContainer>
    </i.ItmeListWrapper>
  ) : (
    <NoItems />
  )
}

export default ItemList
