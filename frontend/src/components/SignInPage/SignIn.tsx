import React, { useState } from 'react'
import * as k from '@/components/SignInPage/style/SignInStyle'
import Header from '@/common/Header'
import { ethers } from 'ethers'
import { ABI_ARRAY, BLOCK_CHAIN_ENDPOINT, CONTRACT_ADDRESS } from '@constants/abi'

const SignIn = () => {
  const [estimatedGasCost, setEstimatedGasCost] = useState('')
  const privateKey = '0xc76fec9bca18245728194f4782b10981c074ca262bf0feadca0963de07a73df1'
  const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)
  const signer = new ethers.Wallet(privateKey, provider)
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI_ARRAY, signer)

  const getEstimatedGasCost = async () => {
    const tx = {
      to: '0x15b84A76cd54E0D086FE0E40Cb3eAc3dB3e9a593',
      value: ethers.utils.parseUnits('1000', 'ether'),
    }

    try {
      const estimatedGas = await provider.estimateGas(tx)
      const gasPrice = await provider.getGasPrice()
      const totalCost = estimatedGas.mul(gasPrice)
      setEstimatedGasCost(ethers.utils.formatEther(totalCost))
    } catch (error) {
      console.error('Error estimating gas cost:', error)
      setEstimatedGasCost('Error estimating gas cost')
    }
  }

  const sendKlay = async () => {
    const tx = {
      to: '0x15b84A76cd54E0D086FE0E40Cb3eAc3dB3e9a593',
      value: ethers.utils.parseUnits('1', 'ether'),
      gasPrice: ethers.utils.parseUnits('25', 'gwei'),
      gasLimit: 21000,
    }

    try {
      const response = await signer.sendTransaction(tx)
      const receipt = await response.wait()
      console.log('Transaction Receipt:', receipt)
      alert('Transaction successful!')
    } catch (error) {
      console.error('Error sending KLAY:', error)
      alert('Transaction failed!')
    }
  }
  const createDIDDocument = async () => {
    try {
      // const feeData = await provider.getFeeData()
      // const baseFee = feeData.gasPrice
      //
      // // maxFeePerGas를 baseFee보다 높게 설정
      // const maxFeePerGas = baseFee.add(ethers.utils.parseUnits('2', 'gwei'))
      // const maxPriorityFeePerGas = ethers.utils.parseUnits('2', 'gwei')
      //
      // const publicKeyHex = signer.publicKey.slice(2)
      // const transactionOptions = {
      //   maxFeePerGas: maxFeePerGas,
      //   maxPriorityFeePerGas: maxPriorityFeePerGas,
      //   gasLimit: 500000,  // 예상 가스 한도
      // }
      // console.log(publicKeyHex)
      // const result = await contract.createDIDDocument(publicKeyHex, transactionOptions)
      const result = await contract.getDIDDocument('did:klay:15b84A76cd54E0D086FE0E40Cb3eAc3dB3e9a593')
      console.log('Transaction Hash:', result)
      // Optionally wait for the transaction to be mined
      // await result.wait()
      console.log('Transaction was mined successfully.')
    } catch (error) {
      console.error('Failed to create DID document:', error)
    }
  }

  return (
    <k.SignInContainer>
      <Header title="로그인" isSearch={false} rightIconSrc={null} />
      <k.SignInButton onClick={getEstimatedGasCost}>
        Estimate Gas Cost
      </k.SignInButton>
      {estimatedGasCost && (
        <>
          <div>Estimated Gas Cost: {estimatedGasCost} ETH</div>
          <k.SignInButton onClick={sendKlay}>
            Send KLAY
          </k.SignInButton>
        </>
      )}
      <k.SignInButton onClick={createDIDDocument}>
        createDIDDocument
      </k.SignInButton>
    </k.SignInContainer>
  )
}

export default SignIn
