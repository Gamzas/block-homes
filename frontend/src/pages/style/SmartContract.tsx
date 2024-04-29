import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  /* justify-content: center; */
`

export const PaperContainer = styled.div`
  margin-top: 50px;
  width: 86%;
  height: 65.4vh;
  border: 1px solid #f8bbbb;
  background: #fff url('/contract.PNG') no-repeat center center;
  background-size: 100% 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

// 컨택트시작

export const ContractContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`

// 컨택트동의

export const ContractAgreeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  /* justify-content: center; */
  align-items: center;
  border: 1px solid;
`
