import useCurrentLocation from '@/hooks/useCurrentLocation'
import CurrentStatus from './CurrentStatus'
import EstateItemCard from './EstateItemCard'
import { useEffect } from 'react'
import EstateItemFilter from './EstateItemFilter'
import * as l from '@components/EstateList/styles/EstateItemListStyle'
const EstateList = [
  {
    condition: 'normal',
    address: '남동길 30번길 13 3층',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '전세',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.2057145,
    longitude: 126.8115472,
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
  {
    condition: 'good',
    address: '광주광역시 광산구 장덕동',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '월세',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.204315,
    longitude: 126.812546,
  },
  {
    condition: 'normal',
    address: '남동길 30번길 13 3층',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '전세',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.204615,
    longitude: 126.813546,
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
    latitude: 35.202615,
    longitude: 126.814546,
  },
  {
    condition: 'good',
    address: '광주광역시 광산구 장덕동',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '월세',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.204615,
    longitude: 126.815546,
  },
]
const EstateItemList = () => {
  const { currentPosition, getCurrentLocation } = useCurrentLocation()

  useEffect(() => {
    getCurrentLocation()
  }, [])
  return (
    <>
      <CurrentStatus
        getCurrentLocation={getCurrentLocation}
        currentPosition={currentPosition}
      />
      <l.EstateItemListContainer>
        {EstateList.map((item, index) => (
          <EstateItemCard key={index} {...item} />
        ))}
      </l.EstateItemListContainer>
        <EstateItemFilter />
    </>
  )
}

export default EstateItemList
