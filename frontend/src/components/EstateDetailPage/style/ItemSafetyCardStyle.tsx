import styled from 'styled-components'

interface colorType {
  $color: string
}

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* margin-bottom: 1rem; */
  /* padding: 1rem; */
  margin: 1rem 0 1rem 0;
`

export const SafetyCardContainer = styled.div<colorType>`
  width: 90%;
  height: 7rem;
  border-radius: 1.3rem;
  background: ${props => props.$color};

  position: relative;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const ImgContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  align-items: center;
  .pig-img {
    position: absolute;
    width: 6rem;
    height: 6rem;
  }
  .alert-img {
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: 0rem;
    left: 3rem;
    z-index: 0;
  }
`

export const WaveContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  overflow: hidden;
  .back-wrapper {
    width: 100%;
    height: 6rem;
    border-radius: 1.3rem;
  }
  .bigWave {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 1.5rem;
  }

  .smallWave {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 1.5rem;
  }
`

export const InfoTextContainer = styled.div<colorType>`
  display: flex;
  position: absolute;
  width: fit-content;
  height: 3rem;
  align-items: center;
  top: 2rem;
  right: 2rem;
  .txt {
    color: #000;
    font-size: 1rem;
    font-weight: 500;
    line-height: 0.5rem;
  }
  .info {
    color: ${props => props.$color};
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    line-height: 0.5rem;
  }
`

export const ReportBtnContainer = styled.div`
  width: 13rem;
  height: 1.5rem;
  border-radius: 1.5rem;
  background: #fff;
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  .icon-container {
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info-text {
    text-align: center;
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 1rem;
  }
  .report-icon {
    width: 1rem;
    height: 1rem;
  }
  .right-icon {
    width: 1rem;
    height: 0.8rem;
  }
`
