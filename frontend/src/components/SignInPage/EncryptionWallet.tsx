import { SignInButton, SignInError, SignInWrapper } from '@components/SignInPage/style/SignInStyle'
import React, { useEffect, useState } from 'react'
import { useCreateDIDDocument } from '@/abi/userDIDRegistry/createDIDDocument'
import { useSetAtom } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'
import { usePostWallet } from '@apis/walletApi'
import { ethers } from 'ethers'
import { useNavigate } from 'react-router-dom'
import SecurityLock from '@assets/lotties/SecurityLock.json'
import FindEmployee from '@assets/lotties/FindEmployee.json'
import DocumentSetting from '@assets/lotties/DocumentSetting.json'
import CloudWallet from '@assets/lotties/CloudWallet.json'
import { useClaimCredential } from '@/abi/citizenshipVCRegistry/claimCredential'

const EncryptionWallet = ({
                            name,
                            phoneNumber,
                            wallet,
                            setWallet,
                            setIsLoading,
                          }: {
  name: string
  phoneNumber: string
  wallet: ethers.Wallet
  setWallet: (wallet: ethers.Wallet) => void
  setIsLoading: (isLoading) => void
}) => {
  const navigate = useNavigate()
  const setUserAtom = useSetAtom(userAtom)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isPasswordMatch, setIsPasswordMatch] = useState(true)
  const { mutate: createDIDDocumentMutate } = useCreateDIDDocument()
  const { mutate: claimCredentialMutate } = useClaimCredential()
  const { mutate: postWalletMutate } = usePostWallet()

  const handleEncryptionWalletButtonClick = async () => {
    if (isPasswordMatch) {
      try {
        // Wallet 암호화 시도
        setIsLoading(['입력하신 비밀번호로\n지갑을 **암호화**하는 중입니다.', SecurityLock])
        const encryptedWallet = await wallet.encrypt(password)
        setPassword('')
        setConfirmPassword('')
        // DID 문서 생성 시도
        setIsLoading(['사용자의 디지털 신분증\nDID를 **발급**하는 중입니다.', FindEmployee])
        createDIDDocumentMutate(wallet, {
          onError: error => {
            setIsLoading(null)
            console.error('DID 발급 실패:', error)
            alert('디지털 신분증 발급 실패했습니다. 다시 시도해주세요.')
            return
          },
        })
        setIsLoading(['사용자의 디지털 증명서\nVC를 **발급**하는 중입니다.', DocumentSetting])
        claimCredentialMutate({ walletAddress: wallet.address }, {
          onError: error => {
            setIsLoading(null)
            console.error('VC 발급 실패:', error)
            alert('디지털 증명서 발급에 실패했습니다. 다시 시도해주세요.')
            return
          },
        })

        // Wallet 정보 서버에 등록 시도
        setIsLoading(['암호화된 지갑을\n**저장**하는 중입니다.', CloudWallet])
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
              setIsLoading(null)
              console.error('Wallet 정보 등록 실패:', error)
              alert('지갑 정보 등록에 실패했습니다. 다시 시도해주세요.')
            },
          },
        )
      } catch (error) {
        setIsLoading(null)
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
    </>
  )
}

export default EncryptionWallet
