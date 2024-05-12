import * as d from '@components/EstateDetailPage/style/DetailInfoStyle'
import { useParams } from 'react-router-dom'
import DetailTabMenu from './DetailTabMenu'
import DetailFooter from './DetailFooter'
import { useEffect } from 'react'
import { selectedItemAtom } from '@/stores/atoms/EstateListStore'
import { useAtom } from 'jotai'
import ItemSafetyCard from './ItemSafetyCard'
import RoomInfo from './RoomInfo'

const DetailInfo = () => {
  // DELETE 삭제하기
  const [selectedItem] = useAtom(selectedItemAtom)

  const { id } = useParams()
  // const [item, setItem] = useState(null)
  // const [loading, setLoading] = useState(true)
  // DELETE 임시 , 삭제하기
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(`/api/items/${id}`)
        // setItem(response.data)
        // setLoading(false)
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert('잘못된 접근입니다.')
        } else {
          alert('오류가 발생했습니다. 다시 시도해주세요')
        }
        // setLoading(false)
      }
    }
    fetchData()
  }, [id])

  // if (loading) return <div>Loading...</div>
  // if (error) return <div>Error: {error}</div>

  return (
    <d.DetailInfoWrapper>
      {selectedItem !== 'not' && (
        <>
          <DetailTabMenu />
          <ItemSafetyCard condition={selectedItem.condition} />
          <RoomInfo info={selectedItem} />
          <DetailFooter />
        </>
      )}
    </d.DetailInfoWrapper>
  )
}

export default DetailInfo
