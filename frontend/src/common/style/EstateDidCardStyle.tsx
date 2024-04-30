import styled from 'styled-components'

export const EstateDidCardContainer = styled.div`
  width: 12.5rem;
  height: 17rem;
  border-radius: 1.5rem;
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
`

export const InfoElement = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: 1rem;

  .element-title {
    font-size: 0.5rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  .element-content {
    font-size: 0.7rem;
    font-weight: 600;
  }
`
