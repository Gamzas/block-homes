import styled from 'styled-components'

export const InfoSafeComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 5% 2% 5%;
`

export const InfoTitleContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.625rem;
  background: #e8e0f7;
  padding: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  .index {
    color: #845bd3;
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0.2rem 0.4rem;
  }

  .info-title {
    padding-top: 0.08rem;
    margin: 0.2rem;
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
  }
`

export const InfoContentContainer = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  border-radius: 0.6rem;
  background: #fff;
  line-height: 1.4rem;
  font-size: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

  .bold-text {
    font-weight: 700;
  }
`
