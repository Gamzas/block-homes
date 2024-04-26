import styled from 'styled-components'

interface ButtonProps {
  $secondary?: boolean
  $small?: boolean
}

export const Button = styled.button<ButtonProps>`
  background: ${props => (props.$secondary ? '#D9D9D9' : '#845BD3')};
  color: white;
  width: ${props => (props.$small ? '93px' : '267.84px')};
  height: ${props => (props.$small ? '34px' : '43.52px')};
  flex-shrink: 0;
  font-size: 15px;
  font-weight: 400;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    // 마우스 호버 시의 스타일
  }

  &:active {
    // 버튼을 눌렀을 때의 스타일
  }

  &:disabled {
    //비활성화 스타일
  }
`

{
  /*
  버튼사용방법
  <Button>보라색 기본 버튼</StyledButton>
  <Button $small>작은 버튼</Button>
  <Button $secondary>회색 버튼</StyledButton>
  <Button $small secondary>회색 작은 버튼</StyledButton> */
}
