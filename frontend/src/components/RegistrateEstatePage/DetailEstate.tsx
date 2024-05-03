import * as d from "@components/RegistrateEstatePage/style/DetailEstateStyle";
import {useState} from "react";

const DetailEstate = () => {
    const options = [
        "에어컨", "냉장고", "세탁기", "가스레인지",
        "인덕션", "전자레인지", "책상", "책장",
        "침대", "옷장", "신발장", "싱크대",
    ]
    const [isSelected, setIsSelected] = useState(true);
    const [selectedOptions, setSelectedOptions] = useState(Array(options.length).fill(false));

    const adjustHeight = (e) => {
        e.target.style.height = 'auto';  // 높이를 초기화
        e.target.style.height = `${e.target.scrollHeight}px`;  // 필요한 높이로 설정
    };

    const handleButtonClick = index => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = !newSelectedOptions[index];  // 클릭한 버튼의 선택 상태 토글
        setSelectedOptions(newSelectedOptions);  // 새 선택 상태 배열로 업데이트
    };

    return (
        <d.DetailEstateContainer>
            <d.DetailEstateSession>
                <div className="title">층 / 엘리베이터</div>
                <d.DetailEstateWrapperInput>
                    <d.DetailEstateInputNumber>
                        <div className="title">전체층</div>
                        <div className="input-wrapper">
                            <input className="input-number" type="number" min="1" max="99"/>
                            <div className="label">층</div>
                        </div>
                    </d.DetailEstateInputNumber>
                    <d.DetailEstateInputNumber>
                        <div className="title">해당층</div>
                        <div className="input-wrapper">
                            <input className="input-number" type="number" min="1" max="99"/>
                            <div className="label">층</div>
                        </div>
                    </d.DetailEstateInputNumber>
                    <d.DetailEstateToggleButton $isSelected={isSelected}>
                        <div className="left" onClick={() => setIsSelected(true)}>유</div>
                        <div className="right" onClick={() => setIsSelected(false)}>무</div>
                    </d.DetailEstateToggleButton>
                </d.DetailEstateWrapperInput>
            </d.DetailEstateSession>
            <d.DetailEstateSession>
                <div className="title">방 / 화장실 / 베란다 개수</div>
                <d.DetailEstateWrapperInput>
                    <d.DetailEstateInputNumber>
                        <div className="title">방</div>
                        <div className="input-wrapper">
                            <input className="input-number" type="number" min="1" max="99"/>
                            <div className="label">개</div>
                        </div>
                    </d.DetailEstateInputNumber>
                    <d.DetailEstateInputNumber>
                        <div className="title">욕실</div>
                        <div className="input-wrapper">
                            <input className="input-number" type="number" min="1" max="99"/>
                            <div className="label">개</div>
                        </div>
                    </d.DetailEstateInputNumber>
                    <d.DetailEstateInputNumber>
                        <div className="title">베란다</div>
                        <div className="input-wrapper">
                            <input className="input-number" type="number" min="1" max="99"/>
                            <div className="label">개</div>
                        </div>
                    </d.DetailEstateInputNumber>
                </d.DetailEstateWrapperInput>
            </d.DetailEstateSession>
            <d.DetailEstateSession>
                <div className="title">상세 옵션</div>
                <d.DetailEstateOptions>
                    {options.map((option, index) => (
                        <d.DetailEstateOption
                            $isSelected={selectedOptions[index]}
                            onClick={() => handleButtonClick(index)}
                        >
                            {option}
                        </d.DetailEstateOption>
                    ))}
                </d.DetailEstateOptions>
            </d.DetailEstateSession>
            <d.DetailEstateSession>
                <div className="title">상세 설명</div>
                <d.DetailEstateBigInput
                    placeholder="매물의 구조, 특징, 주변 시설 등 홍보할 메시지를 입력해주세요."
                    onInput={adjustHeight}/>
            </d.DetailEstateSession>
        </d.DetailEstateContainer>
    );
}

export default DetailEstate;
