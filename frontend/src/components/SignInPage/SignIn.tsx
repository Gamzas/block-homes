import React, { useState } from 'react'
import * as k from '@/components/SignInPage/style/SignInStyle'
import Header from '@/common/Header'
import {
  SignInButton,
  SignInWrapper,
} from '@/components/SignInPage/style/SignInStyle'
import SignUp from '@components/SignInPage/SignUp'

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  const handleSignInButtonClick = () => {
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
            <input className="input" placeholder="홍길동" />
          </SignInWrapper>
          <SignInWrapper>
            <div className="title">전화번호</div>
            <input className="input" placeholder="01012341234" />
          </SignInWrapper>
          <SignInButton onClick={handleSignInButtonClick}>
            본인 인증
          </SignInButton>
        </>
      ) : (
        <SignUp />
      )}
    </k.SignInContainer>
  )
}

export default SignIn
