import styled from "styled-components";

export const AccordionContainer = styled.div`
    width: 100%;
    height: fit-content;
`

export const AccordionSummary = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4%;
    cursor: pointer;
    border-bottom: 1px solid #D9D9D9;

    .title {
        font-size: 1.2rem;
        font-weight: bold;
    }
`

export const AccordionToggleIcon = styled.div`
    width: 15px;
    height: 15px;
    background-image: url("/icon/icon_vertical_arrow.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease-in-out;
`;

export const AccordionDetails = styled.div`
    width: 100%;
    overflow: hidden; // 내용이 접힐 때 내용이 보이지 않도록 설정
    transition: max-height 0.5s ease-in-out; // 부드러운 전환 효과
    max-height: ${props => props.$isOpen ? '1000px' : '0'}; // isOpen 상태에 따라 최대 높이 조정
`