import { ethers } from 'ethers'
import { useClaimCredential } from '@/abi/ownershipVCRegistry/claimCredential'
import { MOLIT_PRIVATE_KEY } from '@constants/abi/GovernmentPrivateKey'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'
import { TestContainer } from '@components/TestPage/style/TestStyle'

const ClaimCredential = () => {
  const { mutate: claimCredentialMutate } = useClaimCredential()
  const handleClaimCredentialButtonClick = async () => {
    const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)
    const MOLITWallet = new ethers.Wallet(MOLIT_PRIVATE_KEY, provider)
    const subject = 'did:klay:0x68Bdec4DA58ab08cFb72c815Fe695FABac8F2588'
    const value = 'did:klay:0x0a750ee0800feb821b3e1cd8b9174bc736b65329'
    const message = ethers.utils.solidityKeccak256(
      ['string', 'uint256', 'string'],
      [subject, Math.floor(Date.now() / 1000), value],
    )
    const messageBytes = ethers.utils.arrayify(message)
    const flatSig = await MOLITWallet.signMessage(messageBytes)
    const sig = ethers.utils.splitSignature(flatSig)

    const params = {
      _subject: subject,
      _issuanceDate: Math.floor(Date.now() / 1000),
      _r: sig.r,
      _s: sig.s,
      _v: sig.v,
      _value: value,
    }
    claimCredentialMutate(params)
  }

  return (
    <TestContainer>
      <div>VC 생성 테스트</div>
      <br />
      <button onClick={handleClaimCredentialButtonClick}>VC 생성</button>
    </TestContainer>
  )
}

export default ClaimCredential
