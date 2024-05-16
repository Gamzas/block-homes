import {
  SignInButton,
  SignInError,
  SignInWrapper,
} from '@components/SignInPage/style/SignInStyle'
import React, { useEffect, useState } from 'react'
import { useCreateDIDDocument } from '@/abi/userDIDRegistry/createDIDDocument'
import { useSetAtom } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'
import { usePostWallet } from '@apis/walletApi'
import { ethers } from 'ethers'
import { useNavigate } from 'react-router-dom'
import IsLoading from '@common/IsLoading'
import SecurityLock from '@assets/lotties/SecurityLock.json'

const EncryptionWallet = ({
  name,
  phoneNumber,
  wallet,
  setWallet,
}: {
  name: string
  phoneNumber: string
  wallet: ethers.Wallet
  setWallet: (wallet: ethers.Wallet) => void
}) => {
  const navigate = useNavigate()
  const setUserAtom = useSetAtom(userAtom)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isPasswordMatch, setIsPasswordMatch] = useState(true)
  const { mutate: createDIDDocumentMutate } = useCreateDIDDocument()
  const { mutate: postWalletMutate } = usePostWallet()
  const [isLoading, setIsLoading] = useState(false)

  const handleEncryptionWalletButtonClick = async () => {
    if (isPasswordMatch) {
      try {
        // Wallet 암호화 시도
        setIsLoading(true)
        const encryptedWallet = await wallet.encrypt(password)
        setPassword('')
        setConfirmPassword('')
        // DID 문서 생성 시도
        createDIDDocumentMutate(wallet, {
          onError: error => {
            console.error('DID 문서 생성 실패:', error)
            alert('DID 문서 생성에 실패했습니다. 다시 시도해주세요.')
            return
          },
        })

        // Wallet 정보 서버에 등록 시도
        postWalletMutate(
          {
            walletAddress: wallet.address,
            encPrivateKey: encryptedWallet,
            name: name,
            phoneNumber: phoneNumber,
          },
          {
            onSuccess: () => {
              setUserAtom({
                walletAddress: wallet.address,
                name: name,
              })
              setWallet(null)
              navigate('/')
            },
            onError: error => {
              console.error('Wallet 정보 등록 실패:', error)
              alert('지갑 정보 등록에 실패했습니다. 다시 시도해주세요.')
            },
          },
        )
      } catch (error) {
        console.error('Wallet 암호화 실패:', error)
        alert('지갑 암호화에 실패했습니다. 다시 시도해주세요.')
        return
      }
    } else {
      alert('비밀번호가 일치하지 않습니다.')
    }
  }

  useEffect(() => {
    setIsPasswordMatch(password === confirmPassword)
  }, [password, confirmPassword])

  return (
    <>
      <SignInWrapper>
        <div className="title">지갑 비밀번호</div>
        <input
          className="input"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="지갑을 암호화 하여 저장합니다."
        />
      </SignInWrapper>
      <SignInWrapper>
        <div className="title">비밀번호 확인</div>
        <input
          className="input"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          placeholder="비밀번호는 찾을 수 없으니 주의하십시오."
        />
      </SignInWrapper>
      {!isPasswordMatch && (
        <SignInError>비밀번호가 일치하지 않습니다.</SignInError>
      )}
      <SignInButton
        onClick={handleEncryptionWalletButtonClick}
        disabled={!isPasswordMatch || !password || !confirmPassword}
      >
        지갑 암호화
      </SignInButton>
      {isLoading && (
        <IsLoading
          textProps={'입력하신 비밀번호로\n지갑을 **암호화**하는 중입니다.'}
          lottieProps={SecurityLock}
        />
      )}
    </>
  )
}

export default EncryptionWallet
