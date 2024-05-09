import styled from 'styled-components'

export const ContractAgreeWrapper = styled.div`
  width: 100%;
  height: 86vh;
  padding: 0 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .card-section {
    margin: 20px 0;
    align-self: start;
  }
  .agreetext-main {
    .agreetext-section1 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
      color: black;
    }
    .agreetext-section2 {
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 10px;
    }
    .agreetext-section3 {
      font-size: 15px;
      font-weight: 600;
      color: #cfc3c3;
      & p {
        margin-bottom: 10px;
      }
    }
  }
  .button-box {
    position: absolute;
    bottom: 3vh;
  }
`

export const EstateDidCardContainer = styled.div`
  width: 5.5rem;
  height: 7.25rem;
  border-radius: 0.75rem;
  overflow: hidden;
  filter: drop-shadow(0px 3.62px 3.62px rgba(0, 0, 0, 0.25));
`

export const TopContainer = styled.div`
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #e9f7f7;
  position: relative;
  padding-top: 0.5rem;

  .ministry-of-land-logo {
    width: 40%;
  }

  .building-type-image {
    width: 65%;
    opacity: 0.8;
    z-index: 10;
    position: relative;
    bottom: -0.5rem;
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

export const BottomContainer = styled.div`
  height: 35%;
  display: flex;
  flex-flow: wrap;
  align-content: space-evenly;
  justify-content: space-around;
  background-color: white;
  padding: 0.2rem;
`

export const InfoElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: 1rem;

  .element-title {
    font-size: 0.5rem;
    margin-bottom: 0.3rem;
  }

  .element-content {
    font-size: 0.6rem;
    font-weight: 500;
  }
`
