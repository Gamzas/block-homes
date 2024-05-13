import {
  SignInButton,
  SignInWrapper,
} from '@components/SignInPage/style/SignInStyle'
import React, { useEffect, useState } from 'react'
import { useCreateDIDDocument } from '@/abi/userDIDRegistry/createDIDDocument'
import { useSetAtom } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'
import { usePostWallet } from '@apis/walletApi'
import { Wallet } from '@klaytn/ethers-ext'
import { useNavigate } from 'react-router-dom'

const EncryptionWallet = ({
  name,
  phoneNumber,
  wallet,
  setWallet,
  encryptionWallet,
  setEncryptionWallet,
}: {
  name: string
  phoneNumber: string
  wallet: Wallet
  setWallet: (wallet: Wallet) => void
  encryptionWallet: string
  setEncryptionWallet: (encryptionWallet: string) => void
}) => {
  const navigate = useNavigate()
  const setUserAtom = useSetAtom(userAtom)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isPasswordMatch, setIsPasswordMatch] = useState(true)
  const { mutate: createDIDDocumentMutate } = useCreateDIDDocument()
  const { mutate: postWalletMutate } = usePostWallet()

  const handleEncryptionWalletButtonClick = async () => {
    if (isPasswordMatch) {
      try {
        const encryptedWallet = await wallet.encrypt(password)
        setEncryptionWallet(encryptedWallet)
        setPassword('')
        setConfirmPassword('')
        createDIDDocumentMutate({
          wallet: wallet,
          params: { publicKey: wallet.publicKey },
        })
        postWalletMutate({
          walletAddress: wallet.address,
          encPrivateKey: encryptionWallet,
          name: name,
          phoneNumber: phoneNumber,
        })
        setUserAtom({
          userNo: 0,
          walletAddress: wallet.address,
          name: name,
        })
        setWallet(null)
        navigate('/')
      } catch {
        alert('암호화를 실패하였습니다. 다시 시도 하세요.')
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
        {!isPasswordMatch && (
          <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>
        )}
      </SignInWrapper>
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
