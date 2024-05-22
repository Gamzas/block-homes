import * as s from '@pages/style/SelfCheckDidPageStyle'
import Header from '@common/Header'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import AddressInput from '@components/SelfCheckDidPage/AddressInput'
import SimpleInput from '@components/SelfCheckDidPage/SimpleInput'
import RealEstateTypeSelect from '@components/SelfCheckDidPage/RealEstateTypeSelect'

const SelfCheckDidPage = () => {
  return (
    <s.SelfUploadDidPageContainer>
      <Header title="부동산 DID 등록 요청" isSearch={false} rightIconSrc="" />
      <div className="info-text">
        등록하고자 하는 목적물의 정보를 기입해주세요.
      </div>
      <s.InputsContainer>
        <AddressInput />
        <SimpleInput
          inputTextEnglish="owner"
          inputTextKorean="소유자"
          placeholder="홍길동"
          unit={null}
        />
        <RealEstateTypeSelect />
        <SimpleInput
          inputTextEnglish="area"
          inputTextKorean="총 면적"
          placeholder="33"
          unit="m2"
        />
      </s.InputsContainer>
      <div className="custom-button-container">
        <CustomButtonStyle> 등록 요청하기 </CustomButtonStyle>
      </div>
    </s.SelfUploadDidPageContainer>
  )
}

export default SelfCheckDidPage
