import styled from 'styled-components'

interface ButtonProps {
  $secondary?: boolean
  $small?: boolean
}

export const Button = styled.button<ButtonProps>`
  background: ${props => (props.$secondary ? '#D9D9D9' : '#845BD3')};
  color: ${props => (props.$secondary ? '#666' : 'white')};
  width: ${props => (props.$small ? '93px' : '267.84px')};
  height: ${props => (props.$small ? '34px' : '43.52px')};
  flex-shrink: 0;
  font-size: 15px;
  font-weight: 400;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
  }
  transition:
    transform 0.1s ease-in-out,
    background-color 0.1s ease-in-out,
    box-shadow 0.1s ease-in-out;
  &:active {
    transform: scale(0.96);
    background-color: ${props => (props.$secondary ? '#bfbfbf' : '#7e57c2')};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background: #d9d9d9;
    color: #666;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    border: none;
  }
`

{
  /*
  버튼사용방법
  <Button disabled>비활성화 버튼</StyledButton>
  <Button>보라색 기본 버튼</StyledButton>
  <Button $small>작은 버튼</Button>
  <Button $secondary>회색 버튼</StyledButton>
  <Button $small secondary>회색 작은 버튼</StyledButton> */
}
