import styled from 'styled-components'

interface ColorProps {
  $color: string
}

export const CurrentStatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5vh;
  background: #fff;
  box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 0;
`
export const CurrentLocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 100%;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  .location-icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.6rem;
  }
  .current-location {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

export const EstateStatusButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14rem;
  height: 100%;
  position: absolute;
  right: 3.2rem;
`

export const EstateStatusButton = styled.button<ColorProps>`
  height: 60%;
  padding: 0.5rem 1rem;
  margin: 0.2rem;
  border-radius: 3rem;
  border: 0.15rem solid ${props => props.$color};
  font-weight: 400;
  line-height: 30%;
  font-size: 0.8rem;
  color: ${props => props.$color};
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.$color};
    border-color: ${props => props.$color};
    color: white;
  }
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 100%;
  .filter-icon {
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 0.6rem;
  }
  .filter-title {
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 1.5rem;
  }
`
