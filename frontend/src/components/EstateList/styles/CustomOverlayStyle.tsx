import styled from 'styled-components'

interface conditionProps {
  $condition: string
}

const getOverLayColor = (condition: string) => {
  switch (condition) {
    case 'good':
      return {
        circle: '#845BD3',
        innerCircle: '#D2C5F1',
      }
    case 'normal':
      return {
        circle: '#24d0d6',
        innerCircle: '#e9f7f7',
      }
    case 'bad':
      return {
        circle: '#FE754E',
        innerCircle: '#FFD8CD',
      }
  }
}

export const EstateItem = styled.div<conditionProps>`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 3rem;
  height: 3rem;
  position: relative;
  .circle {
    border-radius: 100%;
    background-color: ${props => getOverLayColor(props.$condition)?.circle};
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .inner-circle {
    background-color: ${props =>
      getOverLayColor(props.$condition)?.innerCircle};
    border-radius: 100%;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .estate-sign {
    color: ${props => getOverLayColor(props.$condition)?.circle};
    font-size: 1rem;
    font-weight: 500;
    line-height: 2.5rem;
  }
`
