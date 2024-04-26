import styled from 'styled-components'

export const TopCardContainer = styled.div`
  border: 1px black solid;
  width: 100%;
  height: 25vh;
`

export const TopCardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .logo {
    width: 20%;
    height: auto;
  }

  .loginBtn {
    width: 20%;
    font-size: 10px;
  }
`
