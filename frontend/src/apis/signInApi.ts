import axios from 'axios'
import { accountAtom } from '@stores/atoms/accountStore'
import { SignInParamsType, SignUpParamsType } from '@/types/userType'

// export const useGetWalletAddress = () => {
//   const navigate = useNavigate()
//   const setIsLogin = useSetAtom(accountAtom)
//   // 로그인시 되는지 전역 확인용 후에 삭제 예정
//   const setMemberEmail = useSetMemberEmail()
//   const queryClient = useQueryClient()
//
//   const setModalContent = useSetModalContent()
//   const setIsModalOn = useSetISModalOn()
//
//   return useMutation({
//     mutationFn: (payload: SignInParamsType) =>
//       axios.post(`/member/login`, payload),
//
//     onSuccess: res => {
//       const { data } = res
//       if (data.dataHeader.successCode === 0) {
//         // 로그인 후 반환된 email memberEmail에 저장
//         setMemberEmail(data.dataBody.memberInfo.email)
//
//         // 로그인 후 return 받은 데이터 getMember 쿼리에 저장
//         queryClient.setQueryData(['getMember'], data)
//         setIsLogin(true)
//         navigate(`/`)
//       } else {
//         setModalContent({
//           message: data.dataHeader.resultMessage,
//           isInfo: true,
//         })
//         setIsModalOn(true)
//       }
//     },
//
//     onError: err => console.error(err),
//   })
// }

// export const usePostUserInfo = () => {
//   const navigate = useNavigate()
//   const setErrors = useSetSignupErrors()
//
//   return useMutation({
//     mutationFn: (payload: SignUpParamsType) =>
//       customAxios.post(`/member/signup`, payload),
//
//     onSuccess: res => {
//       const { data } = res
//       if (data.dataHeader.successCode === 0) {
//         // 성공했을 때 로직 처리
//         setEmailVerifyStatus('none')
//         navigate('/')
//       } else {
//         if (data.dataHeader.resultCode) {
//           setErrors(data.dataHeader.resultMessage)
//         } else {
//           setErrors({ emailError: '이미 가입되어 있는 이메일입니다.' })
//         }
//       }
//     },
//     //실패 메세지 추가필요
//     onError: err => console.error(err),
//   })
// }
