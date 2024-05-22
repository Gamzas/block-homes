import styled from 'styled-components'

export const ProcessHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  .header-text {
    width: 13.875rem;
    height: 1.4375rem;
    color: #845bd3;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 2rem;
  }

  .header-text-small {
    position: relative;
    left: 0.5rem;
    bottom: -2rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2rem;
  }
`

export const ShopIcon = styled.div`
  width: 7.19744rem;
  height: 8.2rem;
  transform: rotate(-11.633deg);
  background-image: url('/icon/icon_room_transaction.png');
`
