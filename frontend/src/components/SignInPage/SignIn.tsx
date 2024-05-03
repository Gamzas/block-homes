import React, { useState } from 'react'
import * as k from '@components/SignInPage/style/SignInStyle'
import Header from '@common/Header'
import { useSetAtom } from 'jotai'
import { accountAtom } from '@stores/atoms/accountStore'

const SignIn = () => {
  const setAccount = useSetAtom(accountAtom)
  const [manualAddress, setManualAddress] = useState<string>('')

  const handleAddressInput = (event: { target: { value: React.SetStateAction<string> } }) => {
    setManualAddress(event.target.value)
  }

  const handleManualConnect = () => {
    if (manualAddress) {
      setAccount({ account: manualAddress })
    }
  }

  return (
    <k.SignInContainer onClick={e => e.stopPropagation()}>
      <Header title="로그인" isSearch={false} rightIconSrc={null} />
      <k.SignInAccount>
        <input
          className="account-input"
          type="text"
          value={manualAddress}
          onChange={handleAddressInput}
          placeholder="클립 지갑 주소를 입력하세요."
        />
      </k.SignInAccount>
      <k.SignInButton onClick={handleManualConnect}>
        <div className="symbol" />
        클립으로 로그인
      </k.SignInButton>
    </k.SignInContainer>
  )
}

export default SignIn
