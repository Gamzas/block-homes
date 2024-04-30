import QRCodeCanvas from 'qrcode.react'
import { SetStateAction, useEffect, useState } from 'react'
import axios from 'axios'
import { prepare } from 'klip-sdk'
import * as k from '@components/KlipSignInPage/style/KlipSignInStyle'

const KlipSignIn = () => {
  const [qrValue, setQrValue] = useState('')
  const [currentAccount, setCurrentAccount] = useState('')
  const [manualAddress, setManualAddress] = useState('')

  const bappName = 'Block Homes'
  const successLink = 'YOUR_SUCCESS_URL'
  const failLink = 'YOUR_FAIL_URL'

  const klipSignIn = async () => {
    try {
      const result = await prepare.auth({ bappName, successLink, failLink })
      if (result.err) {
        console.error(result.err)
      } else if (result.request_key && result.expiration_time) {
        const qrLink = `https://klipwallet.com/?target=/a2a?request_key=${result.request_key}`
        setQrValue(qrLink)

        const timer = setInterval(async () => {
          const currentTime = Math.floor(Date.now() / 1000)
          const timeLeft = result.expiration_time - currentTime

          if (timeLeft <= 0) {
            console.log('QR code has expired. Fetching a new one...')
            clearInterval(timer)
            klipSignIn() // QR 코드 만료 시 재귀적으로 함수 호출하여 새 QR 코드 요청
            return
          }

          const response = await axios.get(
            `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${result.request_key}`,
          )
          if (response.data.status === 'completed') {
            setCurrentAccount(response.data.result.klaytn_address)
            console.log(currentAccount)
            clearInterval(timer)
          }
        }, 1000)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleAddressInput = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setManualAddress(event.target.value) // 입력 필드로부터 주소를 가져와 상태에 저장
  }

  const handleManualConnect = () => {
    if (manualAddress) {
      setCurrentAccount(manualAddress) // 수동으로 주소 설정
    }
  }

  useEffect(() => {
    klipSignIn()
  }, [])
  return (
    <k.KlipSignInContainer onClick={e => e.stopPropagation()}>
      <k.KlipSignInTitle>클립으로 로그인</k.KlipSignInTitle>
      <k.KlipSignInQRCode>
        <QRCodeCanvas value={qrValue} />
      </k.KlipSignInQRCode>
      <k.KlipSignInInput
        type="text"
        value={manualAddress}
        onChange={handleAddressInput}
        placeholder="클립 지갑 주소를 입력하세요."
      />
      <k.KlipSignInButton onClick={handleManualConnect}>
        <div className="symbol" />
        클립으로 로그인
      </k.KlipSignInButton>
    </k.KlipSignInContainer>
  )
}

export default KlipSignIn
