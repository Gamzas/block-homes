import styled from 'styled-components'

export const FooterContainer = styled.div`
  border-top: 1px solid #adadad;
  width: 100%;
  max-width: 390px;
  height: 60px;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background-color: white;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
`

export const LikendBtn = styled.div`
  margin-left: 1rem;
`
export const InfoContainer = styled.div`
  margin: 1rem;
  .price {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 28px; /* 127.273% */
  }
  .maintenance {
    color: #a0a0a0;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 28px; /* 233.333% */
  }
  .location {
    font-size: 0.9rem;
    font-weight: 400;
  }
`
export const ChatBtn = styled.button`
  border-radius: 5px;
  background: #845bd3;
  width: 6rem;
  height: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2rem;
  .name {
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 500;
  }

  button:active,
  button:focus {
    border: none !important;
    outline: none !important;
  }
`
