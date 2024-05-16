import { TestContainer } from '@components/TestPage/style/TestStyle'
import { useParams } from 'react-router-dom'
import DecryptedWallet from '@components/TestPage/DecryptedWallet'
import ClaimCredential from '@components/TestPage/ClaimCredential'

const Test = () => {
  const { testName } = useParams<{ testName: string }>()
  const renderComponent = () => {
    switch (testName) {
      case 'DecryptedWallet':
        return <DecryptedWallet />
      case 'ClaimCredential':
        return <ClaimCredential />
      default:
        return <div>Component not found</div>
    }
  }
  return (
    <TestContainer>
      {renderComponent()}
    </TestContainer>
  )
}

export default Test
