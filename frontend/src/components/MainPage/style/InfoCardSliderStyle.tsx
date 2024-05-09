import styled from 'styled-components'

export const SliderContainer = styled.div`
  padding: 1rem 0;

  .slick-dots {
    position: absolute;
    bottom: -1.5rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      margin: 0 -0.1rem;

      button {
        &:before {
          font-size: 0.2rem;
          color: #ababab;
        }
      }

      &.slick-active button:before {
        color: #845bd3;
        font-size: 0.4rem;
      }
    }
  }
`
