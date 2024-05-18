import styled from 'styled-components'
import { CustomToggleButtonStyle } from '@common/style/CustomToggleButtonStyle'

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
  border-bottom: 1px solid #d9d9d9;
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
  width: 30%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 1rem;
    font-weight: bold;
    width: fit-content;
    height: fit-content;
  }

  .input-wrapper {
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #c3c3c3;
    border-radius: 3px;
  }

  .input-number {
    width: 68%;
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
    margin-right: 7%;
  }
`

export const DetailEstateClickNumberWrapper = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  justify-content: start;
  align-items: center;

  .title {
    font-size: 1rem;
    font-weight: bold;
    width: fit-content;
    margin-right: 9%;
  }
  .wrapper {
    width: 80%;
    display: flex;
    justify-content: start;
    align-items: center;
  }
`

export const DetailEstateClickNumber = styled.div`
  width: 58%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;

  .minimize,
  .add {
    width: 21px;
    height: 21px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  }
  .minimize {
    background-image: url('/icon/icon_minimize.png');
  }
  .add {
    background-image: url('/icon/icon_add.png');
  }
`

export const DetailEstateToggleButton = styled(CustomToggleButtonStyle)`
  width: 30%;

  .left {
    padding: 6%;
  }

  .right {
    padding: 6%;
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
  color: #845bd3;
  border: 1px solid #e8e0f7;
  border-radius: 5px;
  background-color: ${props => (props.$isSelected ? '#D2C5F1' : '#FFFFFF')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DetailEstateBigInput = styled.textarea`
  width: 100%;
  height: auto;
  padding: 3%;
  border: 1px solid #c3c3c3;
  border-radius: 3px;
  color: #808080;
  resize: none;
  overflow: hidden;
`
export const DetailEstateCheckBox = styled.div`
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
