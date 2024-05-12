import { MoreFunctionCollectionContainer } from '@components/ChattingPage/style/MoreFunctionCollectionStyle'

const MoreFunctionCollection = () => {
  const chatRoomNo = 1

  const moreFunctionDatas = [
    {
      title: '카메라',
      src: '/icon/icon_function_camera.png',
      navigateRoute: '/camera',
    },
    {
      title: '매물 레포트',
      src: '/icon/icon_function_report.png',
      navigateRoute: '/report',
    },
    {
      title: '거래 진행 현황',
      src: '/icon/icon_function_process.png',
      navigateRoute: `/transaction-process/${chatRoomNo}`,
    },
    {
      title: '체크 리스트',
      src: '/icon/icon_function_checklist.png',
      navigateRoute: `/estate-checklist/${chatRoomNo}`,
    },
  ]
  return (
    <MoreFunctionCollectionContainer>
      뭐가 들어가는게 좋을까나
    </MoreFunctionCollectionContainer>
  )
}

export default MoreFunctionCollection
