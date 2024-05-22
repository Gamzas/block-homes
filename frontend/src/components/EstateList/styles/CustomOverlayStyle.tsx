import styled from 'styled-components'

interface conditionProps {
  $condition: number
}

const getOverLayColor = (condition: number) => {
  switch (condition) {
    case 1:
      return {
        circle: '#845BD3',
        innerCircle: '#D2C5F1',
      }
    case 2:
      return {
        circle: '#24d0d6',
        innerCircle: '#e9f7f7',
      }
    case 3:
      return {
        circle: '#FE754E',
        innerCircle: '#FFD8CD',
      }
  }
}

export const EstateItem = styled.div<conditionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 3rem;
  height: 3rem;
  position: relative;
  .circle,
  .inner-circle,
  .estate-sign {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .circle {
    border-radius: 50%;
    background-color: ${props => getOverLayColor(props.$condition)?.circle};
    width: 100%;
    height: 100%;
  }
  .inner-circle {
    background-color: ${props =>
      getOverLayColor(props.$condition)?.innerCircle};
    border-radius: 50%;
    width: 90%;
    height: 90%;
  }
  .estate-sign {
    width: 100%;
    color: ${props => getOverLayColor(props.$condition)?.circle};
    font-size: 1rem;
    font-weight: 500;
    line-height: 3rem;
  }
`
