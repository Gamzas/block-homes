import {CheckEstateContainer} from "@components/RegistrateEstatePage/style/CheckEstateStyle";

const CheckEstate = () => {
    const category = ["주소", "소유자", "주택유형", "면적", "등록일자", "계약상태"]


    return (
        <div>
            {category.map((item, index) => (
                <CheckEstateContainer key={index}>
                    <div className="title">
                        {item}
                    </div>
                    <div className="detail">
                        광주광역시
                    </div>
                </CheckEstateContainer>))}
        </div>
    );
}

export default CheckEstate;
