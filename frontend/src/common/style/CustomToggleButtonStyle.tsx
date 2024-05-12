import styled from 'styled-components'

export const CustomToggleButtonStyle = styled.div<{ $isSelected: boolean }>`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e8e0f7;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  color: #845bd3;

  .left {
    width: 50%;
    height: fit-content;
    background-color: ${props => (props.$isSelected ? '#D2C5F1' : '#FFFFFF')};
    border-radius: 5px;
  }

  .right {
    width: 50%;
    height: fit-content;
    background-color: ${props => (props.$isSelected ? '#FFFFFF' : '#D2C5F1')};
    border-radius: 5px;
  }
`
