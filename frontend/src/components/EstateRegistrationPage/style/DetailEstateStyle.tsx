import styled from "styled-components";

export const DetailEstateContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 3% 5%;
`

export const DetailEstateSession = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 4%;

    .title {
        width: 100%;
        padding: 4% 0;
    }
`

export const DetailEstateWrapperInput = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DetailEstateInputNumber = styled.div`
    width: 27%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: start;

    .title {
        font-size: 0.8rem;
        font-weight: bold;
        width: fit-content;
        height: fit-content;
    }

    .input-wrapper {
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #C3C3C3;
        border-radius: 3px;
    }

    .input-number {
        width: 68%;
        height: fit-content;
        border: none;
        color: #808080;
        padding: 9%;
    }

    .label {
        width: fit-content;
        height: fit-content;
        margin-left: auto;
        margin-right: 7%;
    }
`

export const DetailEstateToggleButton = styled.div<{ $isSelected: boolean }>`
    width: 30%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #E8E0F7;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    color: #845BD3;

    .left {
        width: 50%;
        height: fit-content;
        background-color: ${props => props.$isSelected ? '#D2C5F1' : '#FFFFFF'};
        padding: 6%;
        border-radius: 5px;
    }

    .right {
        width: 50%;
        height: fit-content;
        background-color: ${props => props.$isSelected ? '#FFFFFF' : '#D2C5F1'};
        padding: 6%;
        border-radius: 5px;
    }
`


export const DetailEstateOptions = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 4%;
    flex-wrap: wrap;
`
export const DetailEstateOption = styled.div<{ $isSelected: boolean }>`
    width: 25%;
    height: fit-content;
    padding: 4% 0;
    color: #845BD3;
    border: 1px solid #E8E0F7;
    border-radius: 5px;
    background-color: ${props => props.$isSelected ? '#D2C5F1' : '#FFFFFF'};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DetailEstateBigInput = styled.textarea`
    width: 100%;
    height: auto;
    padding: 3%;
    border: 1px solid #C3C3C3;
    border-radius: 3px;
    color: #808080;
    resize: none;
    overflow: hidden;
`;