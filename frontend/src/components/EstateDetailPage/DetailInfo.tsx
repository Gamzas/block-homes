import * as d from '@components/EstateDetailPage/style/DetailInfoStyle'
import { useParams } from 'react-router-dom'
import DetailTabMenu from './DetailTabMenu'
import DetailFooter from './DetailFooter'
import ItemSafetyCard from './ItemSafetyCard'
import RoomInfo from './RoomInfo'
import { useGetDetailItem } from '@/apis/itemApi'
import ItemLoading from '@/common/ItemLoading'

const DetailInfo = () => {
  const { id } = useParams()
  const {
    data: detailInfoData,
    isLoading,
    isError,
    error,
  } = useGetDetailItem(Number(id))

  if (isLoading) {
    return <ItemLoading />
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  console.log(detailInfoData)
  // const detailInfoData = DetailItem

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const response = await axios.get(`/api/items/${id}`)
  //       // setItem(response.data)
  //       // setLoading(false)
  //     } catch (error) {
  //       if (error.response && error.response.status === 404) {
  //         alert('잘못된 접근입니다.')
  //       } else {
  //         alert('오류가 발생했습니다. 다시 시도해주세요')
  //       }
  //       // setLoading(false)
  //     }
  //   }
  //   fetchData()
  // }, [id])

  // if (loading) return <div>Loading...</div>
  // if (error) return <div>Error: {error}</div>

  return (
    <d.DetailInfoWrapper>
      <>
        <DetailTabMenu />
        <ItemSafetyCard condition={detailInfoData.reportRank} />
        <RoomInfo info={detailInfoData} />
        <DetailFooter info={detailInfoData} />
      </>
    </d.DetailInfoWrapper>
  )
}

export default DetailInfo
