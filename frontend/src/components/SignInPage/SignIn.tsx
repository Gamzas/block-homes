import React, { useState } from 'react'
import * as k from '@/components/SignInPage/style/SignInStyle'
import {
  SignInButton,
  SignInWrapper,
} from '@/components/SignInPage/style/SignInStyle'
import Header from '@/common/Header'
import SignUp from '@components/SignInPage/SignUp'
import { useGetWalletCheck } from '@apis/walletApi'

const SignIn = () => {
  // const setUserAtom = useSetAtom(userAtom)
  const [isSignIn, setIsSignIn] = useState(true)
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const { mutate: getWalletCheckMutate } = useGetWalletCheck()

  const handleSignInButtonClick = () => {
    getWalletCheckMutate({
      name: name,
      phoneNumber: phoneNumber,
    })
    // setUserAtom({
    //   userNo: 0,
    //   walletAddress: wallet.address,
    //   name: name,
    // })
    setIsSignIn(false)
  }

  return (
    <k.SignInContainer>
      <Header
        title={isSignIn ? '간편 본인 인증' : '지갑 연결'}
        isSearch={false}
        rightIconSrc={null}
      />
      {isSignIn ? (
        <>
          <SignInWrapper>
            <div className="title">이름</div>
            <input
              className="input"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="홍길동"
            />
          </SignInWrapper>
          <SignInWrapper>
            <div className="title">전화번호</div>
            <input
              className="input"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              placeholder="01012341234"
            />
          </SignInWrapper>
          <SignInButton
            onClick={handleSignInButtonClick}
            disabled={!name || !phoneNumber}
          >
            본인 인증
          </SignInButton>
        </>
      ) : (
        <SignUp name={name} phoneNumber={phoneNumber} />
      )}
    </k.SignInContainer>
  )
}

export default SignIn
