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
  justify-content: space-around;
  align-items: center;
`

export const DetailEstateInputNumber = styled.div`
  width: 27%;
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
    width: 50%;
    display: flex;
    justify-content: space-around;
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
  }

  .label {
    width: fit-content;
    height: fit-content;
    margin-left: auto;
    margin-right: 7%;
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
