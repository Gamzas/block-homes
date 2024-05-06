import * as r from "@pages/style/EstateRegistrationPageStyle";
import Header from "@common/Header";
import AccordionGroup from "@components/RegistrateEstatePage/AccordionGroup";
import {useState} from "react";

const EstateRegistrationPage = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [isOpenArray, setIsOpenArray] = useState([true, false, false, false]); // 각 아코디언의 열림 상태 초기화
    const buttonNames = ["다음", "매물 등록하기"]


    const handleNextButtonClick = () => {
        if (openIndex < 3) { // 마지막 아코디언이 아니면
            const newOpenIndex = openIndex + 1;
            setOpenIndex(newOpenIndex);

            // 새로운 상태 배열을 생성하여 현재 인덱스만 true로 설정하고, 나머지는 false로 설정
            const newIsOpenArray = Array(isOpenArray.length).fill(false);
            newIsOpenArray[newOpenIndex] = true;

            setIsOpenArray(newIsOpenArray);
        } else {
            // 완료 로직 처리
            console.log("완료 로직 처리");
        }
    }

  return (
    <r.EstateRegistrationPageContainer>
      <Header
        title={'매물 등록'}
        isSearch={false}
        rightIconSrc={null}
      />
      <r.AccodionWrapper>
        <AccordionGroup maxOpenIndex={openIndex} isOpenArray={isOpenArray} setIsOpenArray={setIsOpenArray} />
      </r.AccodionWrapper>
      <r.NextButton onClick={handleNextButtonClick}>
        {openIndex === 3 ? buttonNames[1] : buttonNames[0]}
      </r.NextButton>
    </r.EstateRegistrationPageContainer>
  )
}

export default EstateRegistrationPage
