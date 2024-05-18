import * as d from '@components/EstateDetailPage/style/DetailInfoStyle'
import { useParams } from 'react-router-dom'
import DetailTabMenu from './DetailTabMenu'
import DetailFooter from './DetailFooter'
import ItemSafetyCard from './ItemSafetyCard'
import RoomInfo from './RoomInfo'
import { useDeleteEstateItem, useGetDetailItem } from '@/apis/itemApi'
import ItemLoading from '@/common/ItemLoading'
import { useAtom } from 'jotai'
import { userAtom } from '@/stores/atoms/userStore'

const DetailInfo = () => {
  const [user] = useAtom(userAtom)
  const { id } = useParams()
  const {
    data: detailInfoData,
    isLoading,
    isError,
    error,
  } = useGetDetailItem(Number(id), user.walletAddress)

  const { mutate: deleteItem } = useDeleteEstateItem(
    Number(id),
    user.walletAddress,
  )
  if (isLoading) {
    return <ItemLoading />
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  console.log(detailInfoData)

  //임시
  const handleDelete = () => {
    deleteItem()
  }
  return (
    <d.DetailInfoWrapper>
      <>
        <DetailTabMenu imgUrl={detailInfoData.itemImageList} />
        {/* <button onClick={handleDelete}>삭제(임시)</button> */}
        <ItemSafetyCard condition={detailInfoData.reportRank} />
        <RoomInfo info={detailInfoData} />
        <DetailFooter info={detailInfoData} />
      </>
    </d.DetailInfoWrapper>
  )
}

export default DetailInfo
