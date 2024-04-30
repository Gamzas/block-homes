import styled from 'styled-components'

export const ScreenContainer = styled.div`
  position: relative;
  width: 90%;
  height: 73vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .button-box {
    position: absolute;
    bottom: 3vh;
  }
  .contract-text {
    width: 90%;
    font-size: 23px;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .card-text {
    color: #606060;
    font-size: 10px;
    font-weight: 300;
    text-align: right;
  }
`

export const GridContainer = styled.div`
  gap: 8px;
  width: 90%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-top: 3px solid;
  border-bottom: 3px solid;
`
export const Cell = styled.div`
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-bottom: 2px solid #ddd;
`

export const Label = styled.span`
  font-weight: bold;
`

export const Value = styled.span`
  text-align: center;
`
