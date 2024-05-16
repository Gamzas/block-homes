import styled from 'styled-components'

export const EstateMapContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
  margin-top: 0rem;
`

export const DetailCardContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 390px;
  background: rgba(196, 195, 195, 0.7);
  bottom: 4rem;
  z-index: 10;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-background {
    width: 100%;
    height: 80vh;
  }
`
// DELETE 닫기 버튼 컨테이너 삭제하기
export const CloseCardContainer = styled.div`
  width: 1rem;
  height: 1rem;
  border: 1px solid red;
  position: absolute;
  right: 4rem;
  bottom: 0rem;
`
