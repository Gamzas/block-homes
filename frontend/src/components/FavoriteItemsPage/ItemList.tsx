import * as i from '@components/FavoriteItemsPage/style/ItemListStyle'
import NoItems from './NoItems'
import EstateItemCard from '../EstateList/EstateItemCard'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getFavoriteItem } from '@/apis/itemApi'
import { useAtom } from 'jotai'
import { userAtom } from '@/stores/atoms/userStore'
import ItemLoading from '@/common/ItemLoading'
import { useNavigate } from 'react-router-dom'

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

// TODO 삭제로직 수정
const ItemList = () => {
  const navigate = useNavigate()
  const [editActive, setEditActive] = useState(false)
  // const [selectedItems, setSelectedItems] = useState(new Set())
  const [wallet] = useAtom(userAtom)

  useEffect(() => {
    // 지갑 주소가 없다면 로그인 페이지로 리디렉션
    if (!wallet.walletAddress) {
      if (
        confirm('로그인 후 사용해주세요. 로그인 페이지로 이동하시겠습니까?')
      ) {
        navigate('/signin') // 로그인 페이지로 이동
      } else {
        navigate('/') // 취소 시 메인페이지로 이동
      }
    }
  }, [wallet.walletAddress, navigate])

  // 데이터 불러오기
  const { data, error, isLoading } = useQuery({
    queryKey: ['favoriteItem'],
    queryFn: () => getFavoriteItem(wallet.walletAddress),
  })
  // 데이터 로딩 상태 확인
  if (isLoading) {
    return (
      <i.ItemListWrapper>
        <ItemLoading />
      </i.ItemListWrapper>
    )
  }

  // 에러 상태 확인
  if (error) {
    console.log(error)
    return <div>Error fetching data</div>
  }

  // TODO 서버 연결 시 찜한 목록 아래 변수 사용하기!
  // const [favoriteItems, setFavoriteItems] = useState(FavoriteItems) // 상태에 초기 아이템 목록을 저장합니다.
  const toggleEdit = () => setEditActive(!editActive)

  // const handleSelectItem = (id: number) => {
  //   const newSelectedItems = new Set(selectedItems)
  //   if (newSelectedItems.has(id)) {
  //     newSelectedItems.delete(id)
  //   } else {
  //     newSelectedItems.add(id)
  //   }
  //   setSelectedItems(newSelectedItems)
  // }

  const deleteSelectedItems = async () => {
    // 선택된 아이템들을 삭제하는 API 호출
    // await axios.post('/api/delete-items', { ids: Array.from(selectedItems) })
    // const newItems = favoriteItems.filter(item => !selectedItems.has(item.id))
    // setFavoriteItems(newItems)
    // setSelectedItems(new Set()) // 선택 상태 초기화
    confirm('선택한 매물을 삭제하시겠습니까?')
    setEditActive(false)
  }

  const deleteAllItems = async () => {
    // // 모든 아이템을 삭제하는 API 호출
    // await axios.delete('/api/delete-all-items')
    // setFavoriteItems([]) // 상태를 비워 모든 아이템 삭제 반영
    confirm('전체 매물을 삭제하시겠습니까?')
    setEditActive(false)
  }
  // const deleteItems = async () => {
  //   // try {
  //   //   await axios.post('/api/delete-items', { ids: Array.from(selectedItems) })
  //   //   const newItems = favoriteItems.filter(item => !selectedItems.has(item.id))
  //   //   setFavoriteItems(newItems) // 백엔드에서 성공적으로 삭제된 후 상태 업데이트
  //   //   setSelectedItems(new Set()) // 선택 상태 초기화
  //   // } catch (error) {
  //   //   console.error('Failed to delete items:', error)
  //   // }
  // }

  return data.likedItems.length !== 0 ? (
    <i.ItemListWrapper>
      <i.EditContainer>
        {editActive ? (
          <div className="disabled">
            <div onClick={toggleEdit}>취소</div>
            <div className="delete">
              <div onClick={deleteSelectedItems}>선택삭제</div>
              <div onClick={deleteAllItems}>전체삭제</div>
            </div>
          </div>
        ) : (
          <div className="abled" onClick={toggleEdit}>
            편집
          </div>
        )}
      </i.EditContainer>
      <i.ItemContainer>
        {data.likedItems.map((item, index) => (
          <i.selectedItemContainer>
            {editActive && (
              <input
                type="checkbox"
                // checked={selectedItems.has(item.id)}
                // onChange={() => handleSelectItem(item.id)}
              />
            )}
            <EstateItemCard key={index} {...item} />
          </i.selectedItemContainer>
        ))}
      </i.ItemContainer>
    </i.ItemListWrapper>
  ) : (
    <NoItems />
  )
}

export default ItemList
