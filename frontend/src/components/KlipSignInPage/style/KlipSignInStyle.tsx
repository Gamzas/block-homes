import styled from 'styled-components'

export const KlipSignInContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20% 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`

export const KlipSignInTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-content: center;
`
export const KlipSignInWrapper = styled.div`
  width: 100%;
  height: 50%;
`

export const KlipSignInQRCode = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 10%;

  display: flex;
  justify-content: center;
  align-content: center;
`
export const KlipSignInInput = styled.input`
  width: 80%;
  height: 56px;
  border-radius: 10px;
  border: 1px solid #c3c3c3;
  padding: 10px;
`
export const KlipSignInButton = styled.div`
  background-color: #216fea;
  height: 56px;
  width: 80%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #ffffff;

  .symbol {
    height: 56px;
    width: 56px;
    background-image: url('/icon/icon_klip.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`
