import styled from "styled-components";

export const ScreenContainer = styled.div`
  position: relative;
  width: 90%; 
  height: 80vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`


export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px; // 오른쪽 끝에서 10px 떨어진 곳에 위치
  width: 30px; // 화살표 너비 설정
  height: 30px; // 화살표 높이 설정
  cursor: pointer;

  // 화살표 모양을 CSS로 구현
  &:before {
    content: '→';
    font-size: 30px; // 화살표 크기 설정
    color: #000; // 화살표 색상 설정
  }

  &:hover {
    // 마우스 호버 시 화살표 색상 변경
    &:before {
      color: #555;
    }
  }
`;