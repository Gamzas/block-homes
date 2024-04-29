// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { prepare } from 'klip-sdk'
// import KlipSignIn from '@components/KlipSignInPage/KlipSignIn.tsx'
// import * as k from '@components/KlipSignInPage/style/KlipSignInStyle.tsx'
//
// const KlipConection = () => {
//   const [qrValue, setQrValue] = useState('')
//   const [currentAccount, setCurrentAccount] = useState('')
//   const [modalOpen, setModalOpen] = useState(false)
//
//   const bappName = 'Block Homes'
//   const successLink = 'YOUR_SUCCESS_URL'
//   const failLink = 'YOUR_FAIL_URL'
//
//   const connectKlip = async () => {
//     try {
//       const result = await prepare.auth({ bappName, successLink, failLink })
//       if (result.err) {
//         console.error(result.err)
//       } else if (result.request_key && result.expiration_time) {
//         const qrLink = `https://klipwallet.com/?target=/a2a?request_key=${result.request_key}`
//         setQrValue(qrLink)
//         setModalOpen(true)
//
//         const timer = setInterval(async () => {
//           const currentTime = Math.floor(Date.now() / 1000)
//           const timeLeft = result.expiration_time - currentTime
//
//           if (timeLeft <= 0) {
//             console.log('QR code has expired. Fetching a new one...')
//             clearInterval(timer)
//             setModalOpen(false)
//             connectKlip() // QR 코드 만료 시 재귀적으로 함수 호출하여 새 QR 코드 요청
//             return
//           }
//
//           const response = await axios.get(
//             `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${result.request_key}`,
//           )
//           if (response.data.status === 'completed') {
//             setCurrentAccount(response.data.result.klaytn_address)
//             setModalOpen(false)
//             clearInterval(timer)
//           }
//         }, 1000)
//       }
//     } catch (error) {
//       console.error(error)
//     }
//   }
//
//   useEffect(() => {
//     console.log(currentAccount)
//   }, [currentAccount])
//
//   return (
//     <k.KlipConectionContainer>
//       <k.KlipConnectionButton onClick={() => connectKlip()}>
//         <div className="symbol" />
//         클립으로 로그인
//       </k.KlipConnectionButton>
//       <KlipSignIn
//         value={qrValue}
//         open={modalOpen}
//         setModalOpen={setModalOpen}
//       />
//     </k.KlipConectionContainer>
//   )
// }
//
// export default KlipConection
