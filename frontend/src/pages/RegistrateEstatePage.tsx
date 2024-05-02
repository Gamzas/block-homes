import * as r from "@pages/style/RegistrateEstatePageStyle";
import Header from "@common/Header";
import AccordionGroup from "@components/RegistrateEstatePage/AccordionGroup";

const RegistrateEstatePage = () => {
    const buttonNames = ["다음", "완료"]
    return (
        <r.RegistrateEstatePageStyleContainer>
            <Header
                title={'매물 등록'}
                isSearch={false}
                rightIconSrc={null}
            />
            <AccordionGroup/>
            <r.NextButton>{buttonNames[0]}</r.NextButton>
        </r.RegistrateEstatePageStyleContainer>
    )
}

export default RegistrateEstatePage
