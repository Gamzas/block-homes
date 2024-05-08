import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { accountAtom } from '@/stores/atoms/accountStore'
import * as k from '@/components/SignInPage/style/SignInStyle'
import Header from '@/common/Header'
import { getResult, prepareAuthRequest, prepareClaimCredentialRequest } from '@/apis/kaikasApi'
import { PrepareResponse, ResultResponse } from '@/types/components/kaikasType'
import { useMutation, useQuery } from '@tanstack/react-query'

const SignIn = () => {
  const [account, setAccount] = useAtom(accountAtom)
  const [requestKey, setRequestKey] = useState<string | null>(null)

  const {
    mutate: prepareAuth,
  } = useMutation<PrepareResponse, Error>({
    mutationFn: prepareAuthRequest,
    onSuccess: (data) => {
      console.log('Authentication prepared successfully:', data)
      const url = `kaikas://wallet/api?request_key=${data.request_key}`
      window.open(url, '_blank')
      setRequestKey(data.request_key)
    },
    onError: (error) => {
      console.error('Failed to prepare authentication:', error)
    },
  })

  const {
    data: resultAuth,
  } = useQuery<ResultResponse, Error>({
    queryKey: ['getResult', requestKey],
    queryFn: () => getResult(requestKey),
    enabled: !!requestKey, // requestKey가 존재할 때만 쿼리 실행
  })

  const handlePrepareRequest = () => {
    prepareAuth()
  }

  useEffect(() => {
    if (resultAuth) {
      setAccount(resultAuth.result)
      console.log('Account updated with:', resultAuth)
    }
  }, [resultAuth, setAccount])

  const {
    mutate: prepareClaimCredential,
  } = useMutation<PrepareResponse, Error>({
    mutationFn: prepareClaimCredentialRequest,
    onSuccess: (data) => {
      console.log('Authentication prepared successfully:', data)
      const url = `kaikas://wallet/api?request_key=${data.request_key}`
      window.open(url, '_blank')
      setRequestKey(data.request_key)
    },
    onError: (error) => {
      console.error('Failed to prepare authentication:', error)
    },
  })

  const { error, isError } = useQuery<ResultResponse, Error>({
    queryKey: ['getResult', requestKey],
    queryFn: () => getResult(requestKey),
    enabled: !!requestKey, // requestKey가 존재할 때만 쿼리 실행
  });

  const handlePrepareClaimCredentialRequest = () => {
    prepareClaimCredential()
  }
  return (
    <k.SignInContainer>
      <Header title="로그인" isSearch={false} rightIconSrc={null} />
      <k.SignInButton onClick={handlePrepareRequest}>
        Kaikas prepare / request
      </k.SignInButton>
      <br />
      <k.SignInButton onClick={handlePrepareClaimCredentialRequest}>
        claimCredential
      </k.SignInButton>
      <br />
      {resultAuth && <div>Address: {account.klaytn_address}</div>}
      <br />
      {isError && <div>Error: {error?.message}</div>}
    </k.SignInContainer>
  )
}

export default SignIn
