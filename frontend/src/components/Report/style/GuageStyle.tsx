import styled from 'styled-components'

export const GaugeContainer = styled.div`
  width: 120px;
  height: 60px;
  position: relative;
  /* background-color: #fff; */

  .pointer {
    width: 0px;
    height: 0px;
    border-bottom: 34px solid #845bd3;
    border-right: 3px solid transparent;
    border-left: 3px solid transparent;
    background: linear-gradient(
      to bottom,
      #000 50%,
      #000 50%,
      #666 80%,
      transparent 100%
    );
    position: absolute;
    bottom: 4px;
    left: 48%; // 중앙 정렬
    transform-origin: bottom;
    transform: rotate(-45deg);
    transition: transform 2s;
  }

  .status-text {
    position: absolute;
    bottom: 33%;
    left: 42%;
    font-weight: 700;
    font-size: 12px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 51px;
    left: 55.5px;
    width: 10px;
    height: 10px;
    background: #845bd3;
    border-radius: 50%;
  }
`
