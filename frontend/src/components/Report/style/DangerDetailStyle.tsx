import styled from 'styled-components'

export const DangerDetailContainer = styled.div`
  width: 20.1875rem;
  border-radius: 0.43rem;
  background: #f9f9f9;
  box-shadow: 0px 5.972px 5.972px 3px rgba(0, 0, 0, 0.25);
  padding: 1rem 0.5rem;
  margin-bottom: 1rem;
  font-weight: 500;

  .title {
    font-size: 1rem;
    padding: 0 0.7rem;
    width: 100%;
    display: flex;
    align-items: center;
    color: #43c259;
  }

  .title.danger {
    color: #fa5655;
  }

  .title-box {
    width: 18rem;
  }

  .rotate-arrow {
    transform: rotateX(180deg);
    transition: transform 0.3s ease-in-out;
  }
`

interface ToggleMessageProps {
  isVisible: boolean
}

export const ToggleMessage = styled.div<ToggleMessageProps>`
  opacity: ${props => (props.isVisible ? '0' : '1')};
  max-height: ${props => (props.isVisible ? '0' : '10rem')};
  overflow: hidden;
  transition:
    opacity 0.5s ease-in-out,
    max-height 0.5s ease-in-out;
  color: #808080;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0 2rem;
  padding-top: ${props => (props.isVisible ? '0' : '1rem')};
  line-height: 1.4rem;
`
