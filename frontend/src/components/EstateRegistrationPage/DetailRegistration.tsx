import * as d from "@components/EstateRegistrationPage/style/DetailRegistrationStyle";
import {DetailRegistrationBigInput} from "@components/EstateRegistrationPage/style/DetailRegistrationStyle";
import {useState} from "react";

const DetailRegistration = () => {
    const types = ["매매", "전세", "월세"];
    const costTypes = ["전기", "가스", "수도", "인터넷", "TV"];
    const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
    const [selectedTypes, setSelectedTypes] = useState(Array(costTypes.length).fill(false));
    const handleButtonClick = index => {
        const newSelectedTypes = [...selectedTypes];
        newSelectedTypes[index] = !newSelectedTypes[index];  // 클릭한 버튼의 선택 상태 토글
        setSelectedTypes(newSelectedTypes);  // 새 선택 상태 배열로 업데이트
    };

    return (
        <d.DetailRegistrationContainer>
            <d.DetailRegistrationSession>
                <div className="title">거래 유형 / 가격</div>
                <d.DetailRegistrationType>
                    {types.map((type, index) => (
                        <d.DetailRegistrationTypeButton
                            key={index}
                            $typeNum={3}
                            $isSelected={index === selectedTypeIndex}
                            onClick={() => setSelectedTypeIndex(index)}
                        >
                            {type}
                        </d.DetailRegistrationTypeButton>
                    ))}
                </d.DetailRegistrationType>
                <d.DetailRegistrationWrapperInput>
                    <d.DetailRegistrationPricesInput>
                        <input className="prices-input" placeholder="보증금"/>
                        <div className="prices-label">만원</div>
                    </d.DetailRegistrationPricesInput>
                    <d.DetailRegistrationPricesInput>
                        <input className="prices-input" placeholder="월세"/>
                        <div className="prices-label">만원</div>
                    </d.DetailRegistrationPricesInput>
                </d.DetailRegistrationWrapperInput>
            </d.DetailRegistrationSession>
            <d.DetailRegistrationSession>
                <div className="title">관리비</div>
                <d.DetailRegistrationType>
                    {costTypes.map((costType, index) => (
                        <d.DetailRegistrationTypeButton
                            key={index}
                            $typeNum={5}
                            $isSelected={selectedTypes[index]}
                            onClick={() => handleButtonClick(index)}
                        >
                            {costType}
                        </d.DetailRegistrationTypeButton>
                    ))}
                </d.DetailRegistrationType>
                <d.DetailRegistrationWrapperInput>
                    <d.DetailRegistrationPricesInput>
                        <input className="prices-input" placeholder="관리비"/>
                        <div className="prices-label">만원</div>
                    </d.DetailRegistrationPricesInput>
                    <d.DetailRegistrationCheckBox>
                        <input className="check-box" type='checkbox'/>
                        관리비 없음
                    </d.DetailRegistrationCheckBox>
                </d.DetailRegistrationWrapperInput>
            </d.DetailRegistrationSession>
            <d.DetailRegistrationSession>
                <div className="title">입주가능일</div>
                <DetailRegistrationBigInput placeholder="예) 즉시 입주, 날짜 협의, 7월 중"/>
            </d.DetailRegistrationSession>
        </d.DetailRegistrationContainer>
    );
}

export default DetailRegistration;
