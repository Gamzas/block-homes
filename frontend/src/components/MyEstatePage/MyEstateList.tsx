import * as m from '@components/MyEstatePage/style/MyEstateListStyle'
import NoMyEstate from './NoMyEstate'
import { useDeleteEstateItem, useGetMyEstate } from '@/apis/itemApi'
import { useAtom } from 'jotai'
import { userAtom } from '@/stores/atoms/userStore'
import useLoginStatus from '@/hooks/useLoginStatus'
import ItemLoading from '@/common/ItemLoading'
import EstateItemCard from '../EstateList/EstateItemCard'

const MyEstateList = () => {
  useLoginStatus()
  const [user] = useAtom(userAtom)
  const { mutate: deletItem } = useDeleteEstateItem(user.walletAddress)
  const { data, isLoading } = useGetMyEstate(user.walletAddress)
  if (isLoading) {
    return <ItemLoading />
  }
  const myEstateList = data.itemList
  console.log(myEstateList)
  const deletMyItem = (num: number) => {
    if (confirm('매물을 삭제하시겠습니까?')) {
      deletItem(num)
    }
    // deletItem(num)
  }
  return myEstateList.length !== 0 ? (
    <m.MyEstateListWrapper>
      <m.MyEstateListContainer>
        {myEstateList.map(item => (
          <m.ItemContainer key={item.itemNo}>
            <EstateItemCard {...item} />
            <div
              className="delete-box"
              onClick={() => deletMyItem(item.itemNo)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.5 7.5V20C5.5 20.3978 5.65804 20.7794 5.93934 21.0607C6.22064 21.342 6.60218 21.5 7 21.5H18C18.3978 21.5 18.7794 21.342 19.0607 21.0607C19.342 20.7794 19.5 20.3978 19.5 20V7.5H5.5Z"
                  stroke="#4A4A4A"
                />
                <path
                  d="M8.5 10.41V18.59M12.5 10.41V18.59M16.5 10.41V18.59M9 4.333V3.244C9 2.557 9.627 2 10.4 2H14.6C15.373 2 16 2.557 16 3.244V4.334"
                  stroke="#4A4A4A"
                  strokeLinecap="round"
                />
                <path
                  d="M20 4.5H5C4.17157 4.5 3.5 5.17157 3.5 6C3.5 6.82843 4.17157 7.5 5 7.5H20C20.8284 7.5 21.5 6.82843 21.5 6C21.5 5.17157 20.8284 4.5 20 4.5Z"
                  stroke="#4A4A4A"
                />
              </svg>
            </div>
          </m.ItemContainer>
        ))}
      </m.MyEstateListContainer>
    </m.MyEstateListWrapper>
  ) : (
    <NoMyEstate />
  )
}

export default MyEstateList
