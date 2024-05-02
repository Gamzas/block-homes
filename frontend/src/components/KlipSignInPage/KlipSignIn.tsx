import React, { useEffect, useState } from 'react'
import QRCodeCanvas from 'qrcode.react'
import axios from 'axios'
import { prepare } from 'klip-sdk'
import * as k from '@components/KlipSignInPage/style/KlipSignInStyle'
import Header from '@common/Header'
import { useSetAtom } from 'jotai'
import { accountAtom } from '@stores/atoms/accountStore'

const KlipSignIn = () => {
  const [qrValue, setQrValue] = useState<string>('')
  const setAccount = useSetAtom(accountAtom)
  const [manualAddress, setManualAddress] = useState<string>('')

  const bappName = 'Block Homes'
  const successLink = 'YOUR_SUCCESS_URL'
  const failLink = 'YOUR_FAIL_URL'

  const fetchKlipStatus = async (requestKey, timer) => {
    try {
      const response = await axios.get(
        `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${requestKey}`,
      )
      if (response.data.status === 'completed') {
        setAccount({ account: response.data.result.klaytn_address })
        clearInterval(timer)
      }
    } catch (error) {
      console.error('Failed to fetch Klip status:', error)
    }
  }

  const klipSignIn = async () => {
    try {
      const result = await prepare.auth({ bappName, successLink, failLink })
      if (result.err) {
        throw new Error(result.err)
      }
      const qrLink = `https://klipwallet.com/?target=/a2a?request_key=${result.request_key}`
      setQrValue(qrLink)

      const timer = setInterval(() => {
        const currentTime = Math.floor(Date.now() / 1000)
        const timeLeft = result.expiration_time - currentTime

        if (timeLeft <= 0) {
          console.log('QR code has expired. Fetching a new one...')
          clearInterval(timer)
          klipSignIn() // 재귀 호출 대신 새로운 시도를 위한 호출
        } else {
          fetchKlipStatus(result.request_key, timer)
        }
      }, 1000)
    } catch (error) {
      console.error('Klip sign-in failed:', error)
    }
  }

  useEffect(() => {
    klipSignIn()
  }, [])

  const handleAddressInput = event => {
    setManualAddress(event.target.value)
  }

  const handleManualConnect = () => {
    if (manualAddress) {
      setAccount({ account: manualAddress })
    }
  }

  return (
    <k.KlipSignInContainer onClick={e => e.stopPropagation()}>
      <Header title="로그인" isSearch={false} rightIconSrc={null} />
      <k.KlipSignInAccount>
        <QRCodeCanvas className="qr-code" value={qrValue} size={150} />
        <input
          className="account-input"
          type="text"
          value={manualAddress}
          onChange={handleAddressInput}
          placeholder="클립 지갑 주소를 입력하세요."
        />
      </k.KlipSignInAccount>
      <k.KlipSignInButton onClick={handleManualConnect}>
        클립으로 로그인
      </k.KlipSignInButton>
    </k.KlipSignInContainer>
  )
}

export default KlipSignIn
