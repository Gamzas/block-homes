import * as m from '@components/MyEstatePage/style/MyEstateListStyle'
import MyEstateCard from './MyEstateCard'
import { useEffect, useState } from 'react'
import NoMyEstate from './NoMyEstate'
import { EstateItem } from '@/types/components/estateListType'
const estateList = [
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
  {
    condition: 'good',
    address: '광주광역시 광산구 장덕동',
    infos: ['남향', '교육시설', '역세권'],
    leaseType: '전세',
    price: '3억',
    roomSize: '37',
    roomCount: '투룸',
    createDate: '2024년 3월 21일',
    latitude: 35.204315,
    longitude: 126.812546,
  },
]
const MyEstateList = () => {
  const [myEstateList, setMyEstateList] = useState<EstateItem[]>([])
  const [loading, setLoading] = useState(true)
  // TODO 나의 매물 조회 코드 작성하기
  useEffect(() => {
    const fetchData = async () => {
      try {
        setMyEstateList(estateList)
        setLoading(false)
      } catch {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  if (loading) return <div>Loading...</div>
  return myEstateList.length !== 0 ? (
    <m.MyEstateListWrapper>
      <m.EditContainer>
        <div>매물관리</div>
      </m.EditContainer>
      <m.MyEstateListContainer>
        {myEstateList.map((item, index) => (
          <MyEstateCard />
        ))}
      </m.MyEstateListContainer>
    </m.MyEstateListWrapper>
  ) : (
    <NoMyEstate />
  )
}

export default MyEstateList
