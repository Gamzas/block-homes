import { SignInPageContainer } from '@pages/style/SignInPageStyle'
import SignIn from '@components/SignInPage/SignIn'
import WaveContainer from '@common/WaveContainer'
import React, { useState } from 'react'
import IsLoading from '@common/IsLoading'

const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(null)
  return (
    <SignInPageContainer>
      <WaveContainer />
      <SignIn setIsLoading={setIsLoading} />
      {isLoading && <IsLoading textProps={isLoading[0]} lottieProps={isLoading[1]} />}
    </SignInPageContainer>
  )
}

export default SignInPage
