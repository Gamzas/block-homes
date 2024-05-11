import * as n from '@components/FavoriteItemsPage/style/NoItemsStyle'
import { useNavigate } from 'react-router-dom'

const NoItems = () => {
  const navigate = useNavigate()
  const goEstate = () => {
    navigate('/estate')
  }
  return (
    <n.Container>
      <n.ContentContainer>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="85"
            viewBox="0 0 85 85"
            fill="none"
          >
            <g clip-path="url(#clip0_1039_734)">
              <path
                d="M42.5 0C19.0267 0 0 19.0267 0 42.5C0 65.9733 19.0267 85 42.5 85C65.9733 85 85 65.9733 85 42.5C85 19.0267 65.9733 0 42.5 0ZM42.5 82.3438C20.5302 82.3438 2.65625 64.4698 2.65625 42.5C2.65625 20.5302 20.5302 2.65625 42.5 2.65625C64.4698 2.65625 82.3438 20.5302 82.3438 42.5C82.3438 64.4698 64.4698 82.3438 42.5 82.3438Z"
                fill="#717888"
              />
              <path
                d="M42.4997 43.1034C37.4204 43.1034 32.5492 45.1211 28.9575 48.7128C25.3659 52.3044 23.3482 57.1757 23.3482 62.255H61.6513C61.6513 57.1757 59.6336 52.3044 56.0419 48.7128C52.4503 45.1211 47.579 43.1034 42.4997 43.1034ZM26.2169 59.6014C26.8524 55.7399 28.8379 52.2294 31.8198 49.695C34.8017 47.1606 38.5863 45.767 42.4997 45.7623C50.6916 45.7623 57.5075 51.7654 58.7825 59.6014H26.2169ZM22.8727 21.9092L21.425 24.1404L31.1071 30.4198L21.425 36.7045L22.8727 38.9304L35.9893 30.4198L22.8727 21.9092ZM62.1268 21.9092L49.0129 30.4198L62.1268 38.9304L63.5744 36.7045L53.8951 30.4198L63.5744 24.1404L62.1268 21.9092Z"
                fill="#717888"
              />
            </g>
            <defs>
              <clipPath id="clip0_1039_734">
                <rect width="85" height="85" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="txt">관심매물이 없습니다.</div>
      </n.ContentContainer>
      <n.BtnContainer onClick={goEstate}>
        <div className="title">매물 구경하러 가기</div>
      </n.BtnContainer>
    </n.Container>
  )
}

export default NoItems
