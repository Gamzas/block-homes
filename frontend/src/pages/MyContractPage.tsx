import Footer from '@/common/Footer'
import Header from '@/common/Header'
import ContractList from '@/components/MyContractpage/ContractList'
import * as c from '@pages/style/MyContractPageStyle'

const MyContractPage = () => {
  return (
    <c.Container>
      <Header title={'나의 계약서'} isSearch={false} rightIconSrc={''} />
      <ContractList />
      <Footer />
    </c.Container>
  )
}

export default MyContractPage
