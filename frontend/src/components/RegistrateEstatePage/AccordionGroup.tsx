import Accordion from "@components/RegistrateEstatePage/Accordion";
import CheckEstate from "@components/RegistrateEstatePage/CheckEstate";
import {AccordionGroupContainer} from "@components/RegistrateEstatePage/style/AccordionGroupStyle";
import {useState} from "react";

const AccordionGroup = () => {
    const accordions = [
        {title: "1. 임대목적물 확인", children: <CheckEstate/>},
        {title: "2. 거래 상세 정보", children: <CheckEstate/>},
        {title: "3. 방 정보", children: <CheckEstate/>},
        {title: "4. 사진 등록", children: <CheckEstate/>},
    ]
    const [openIndex, setOpenIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    return (
        <AccordionGroupContainer>
            {
                accordions.map(
                    (accordion, index) =>
                        <Accordion
                            key={index}
                            title={accordion.title}
                            isOpen={index === openIndex}
                            onToggle={() => handleAccordionClick(index)}
                        >
                            {accordion.children}
                        </Accordion>
                )
            }
        </AccordionGroupContainer>
    )
}

export default AccordionGroup
