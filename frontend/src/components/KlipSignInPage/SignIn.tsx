import React, { useState } from 'react'
import * as k from '@components/KlipSignInPage/style/SignInStyle'
import Header from '@common/Header'
import { useSetAtom } from 'jotai'
import { accountAtom } from '@stores/atoms/accountStore'

const SignIn = () => {
  const setAccount = useSetAtom(accountAtom)
  const [manualAddress, setManualAddress] = useState<string>('')

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
        <input
          className="account-input"
          type="text"
          value={manualAddress}
          onChange={handleAddressInput}
          placeholder="클립 지갑 주소를 입력하세요."
        />
      </k.KlipSignInAccount>
      <k.KlipSignInButton onClick={handleManualConnect}>
        <div className="symbol" />
        클립으로 로그인
      </k.KlipSignInButton>
    </k.KlipSignInContainer>
  )
}

export default SignIn
