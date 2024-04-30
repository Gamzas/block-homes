import styled from 'styled-components'

interface colorType {
  $color: string
}

export const ItemCardContainer = styled.div<colorType>`
  width: 90%;
  height: 10rem;
  flex-shrink: 0;
  border-radius: 18.5px;
  background: ${props => props.$color};
  position: relative;
  margin-top: 1rem;
  z-index: 0;
`

export const BackgroundContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  overflow: hidden;

  .back-wrapper {
    width: 100%;
    height: 10rem;
  }
  .big-wave {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 1.5rem;
  }

  .small-wave {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 1.5rem;
  }
`
export const ItemStatusContainer = styled.div`
  position: absolute;
  right: 0.2rem;
  top: -0.4rem;
  .polygon {
    /* position: absolute; */
    width: 100%;
    height: auto;
    /* z-index: 999; */
  }
  .status-title {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 40px;
    right: 1%;
    top: 25%;
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }
`

export const LocationContainer = styled.div<colorType>`
  display: flex;
  width: fit-content;
  height: 1rem;
  justify-content: left;
  align-items: center;
  flex-shrink: 0;
  top: 1rem;
  left: 1rem;
  position: absolute;
  .location-icon {
    margin-right: 0.2rem;
    width: 1rem;
    height: 100%;
  }
  .location-text {
    color: ${props => props.$color};
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 0.5rem;
  }
`
export const ItemImage = styled.img`
  width: 7rem;
  height: 7rem;
  flex-shrink: 0;
  border-radius: 10px;
  position: absolute;
  top: 2.3rem;
  left: 1rem;
  z-index: 3;
`
export const ItemInfoContainer = styled.div<colorType>`
  display: flex;
  align-items: center;
  text-align: center;
  width: fit-content;
  height: 2rem;
  position: absolute;
  top: 2rem;
  left: 8rem;
  .info-box {
    width: fit-content;
    text-align: center;
    height: 75%;
    border: 0.06rem solid;
    color: ${props => props.$color};
    border-radius: 0.8rem;
    font-size: 0.7rem;
    font-weight: 400;
    padding: 0.4rem;
    margin-left: 0.5rem;
  }
`
export const ItemPriceInfoContainer = styled.div`
  width: 15rem;
  height: 5rem;
  position: absolute;
  top: 4.3rem;
  left: 8.7rem;
  z-index: 3;
  .price-text {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
  }
  .info-text {
    font-size: 0.7rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
  }
`
