import styled from 'styled-components'

export const VCCardWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  position: relative;
`

export const VCCardContainer = styled.div`
  width: 90%;
  height: 11.625rem;
  border-radius: 0.875rem;
  background: rgba(235, 225, 255, 0.36);
  position: relative;
  .background {
    width: 10rem;
    height: 10rem;
    position: absolute;
    bottom: -1rem;
    right: -1rem;
    z-index: 0;
  }
`

export const CertifiedContainer = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
`

export const CertifiedTitle = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  /* margin-top: 1rem; */
  .title-img {
    width: 2.1875rem;
    height: 2.1875rem;
  }
  .title {
    color: #555050;
    font-size: 0.875rem;
    font-weight: 700;
    margin: 0.4rem;
  }
`
export const CertifiedContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  .txt {
    color: #555050;
    font-size: 1.125rem;
    font-weight: 600;
  }
  .security-img {
    margin-top: 2.5rem;
    width: 5.875rem;
    height: 1.67325rem;
  }
`

export const NotCertifiedContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  .txt {
    margin-top: 3rem;
    color: #555050;
    font-size: 1.0625rem;
    font-weight: 600;
  }
  .btn {
    width: 9.75rem;
    height: 2.5625rem;
    border-radius: 0.5rem;
    background: #845bd3;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    text-align: center;

    .btn-img {
      width: 1.3125rem;
      height: 1.3125rem;
      margin-left: 1rem;
    }
    .btn-txt {
      color: #fff;
      font-size: 0.875rem;
      font-weight: 600;
      margin-left: 1rem;
    }
  }
`
