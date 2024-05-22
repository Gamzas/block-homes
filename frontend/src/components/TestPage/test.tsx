import { TestContainer } from '@components/TestPage/style/TestStyle'
import { useParams } from 'react-router-dom'
import DecryptedWallet from '@components/TestPage/DecryptedWallet'
import ClaimCredential from '@components/TestPage/ClaimCredential'
import CheckBalance from '@components/TestPage/CheckBalance'

const Test = () => {
  const { testName } = useParams<{ testName: string }>()
  const renderComponent = () => {
    switch (testName) {
      case 'DecryptedWallet':
        return <DecryptedWallet />
      case 'ClaimCredential':
        return <ClaimCredential />
      case 'CheckBalance':
        return <CheckBalance />

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
