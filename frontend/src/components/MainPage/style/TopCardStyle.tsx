import styled from 'styled-components'

export const TopCardContainer = styled.div`
  border: 1px black solid;
  width: 100%;
  height: 220px;
  position: relative;
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

export const TopCardInfoTextContainer = styled.div`
  width: 100%;
  padding: 0 8%;

  .mainInfoText {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  .infoReport {
    font-size: 9px;
    font-weight: 400;
    text-decoration-line: underline;
  }
`

export const BackgroundWaveContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;

  .big-wave {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .small-wave {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
