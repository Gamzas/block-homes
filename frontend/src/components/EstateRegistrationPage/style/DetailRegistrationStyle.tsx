import styled from 'styled-components'

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
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 0.5rem;

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
  padding: 0.4rem 0;
`
export const DetailRegistrationTypeButton = styled.div<{
  $typeNum: number
  $isSelected: boolean
}>`
  width: fit-content;
  height: fit-content;
  color: #845bd3;
  padding: calc(${props => 8 / props.$typeNum}%)
    calc(${props => 18 / props.$typeNum}%);
  border: 1px solid #e8e0f7;
  border-radius: 5px;
  background-color: ${props => (props.$isSelected ? '#D2C5F1' : '#FFFFFF')};
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
  padding: 0.4rem 0;
`

export const DetailRegistrationInputNumber = styled.div`
  width: 45%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 0.9rem;
    font-weight: bold;
    width: fit-content;
    height: fit-content;
  }

  .input-wrapper {
    width: 64%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #c3c3c3;
    border-radius: 3px;
  }

  .input-number {
    width: 65%;
    height: fit-content;
    border: none;
    color: #808080;
    padding: 9%;
    text-align: end;
  }

  .label {
    width: fit-content;
    height: fit-content;
    margin-left: auto;
    margin-right: 5%;
  }
`

export const DetailRegistrationCheckBox = styled.div`
  width: 45%;
  height: fit-content;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 3% 0;

  .check-box {
    width: 20px;
    height: 20px;
    margin-left: 5%;
    accent-color: #845bd3;
  }
`

export const DetailRegistrationBigInput = styled.input`
  width: 100%;
  height: fit-content;
  padding: 3%;

  border: 1px solid #c3c3c3;
  border-radius: 3px;
  color: #808080;
`
