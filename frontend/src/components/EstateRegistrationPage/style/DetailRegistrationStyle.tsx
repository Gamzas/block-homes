import styled from "styled-components";

export const DetailRegistrationContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 3% 5%;
`

export const DetailRegistrationSession = styled.div`
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

export const DetailRegistrationType = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 4%;
`
export const DetailRegistrationTypeButton = styled.div<{ $typeNum: number, $isSelected: boolean }>`
    width: fit-content;
    height: fit-content;
    color: #845BD3;
    padding: calc(${props => 8 / props.$typeNum}%) calc(${props => 18 / props.$typeNum}%);
    border: 1px solid #E8E0F7;
    border-radius: 5px;
    background-color: ${props => props.$isSelected ? '#D2C5F1' : '#FFFFFF'};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const DetailRegistrationWrapperInput = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DetailRegistrationPricesInput = styled.div`
    width: 48%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #C3C3C3;
    border-radius: 3px;

    .prices-input {
        width: 70%;
        height: fit-content;
        border: none;
        color: #808080;
        padding: 5%;
    }

    .prices-label {
        width: fit-content;
        height: fit-content;
        margin-left: auto;
        margin-right: 4%;
    }
`
export const DetailRegistrationCheckBox = styled.div`
    width: 48%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;

    .check-box {
        border: 1px solid #000000;
        border-radius: 1px;
        margin-right: 5%;
    }
`

export const DetailRegistrationBigInput = styled.input`
    width: 100%;
    height: fit-content;
    padding: 3%;

    border: 1px solid #C3C3C3;
    border-radius: 3px;
    color: #808080;
`