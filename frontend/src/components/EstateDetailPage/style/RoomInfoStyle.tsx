import styled from 'styled-components'

export const RoomInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 60px;
  background-color: white;
  margin-bottom: 1rem;
`

export const TitleContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2rem; /* 155.556% */
    margin-bottom: 0.5rem;
  }
  .underline {
    width: 100%;
    color: #d7dadd;
  }
`
export const DetailInfoContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;
  .info-box {
    position: relative;
    width: 48%;
    display: flex;
    align-items: center;
    margin: 1%;
    padding: 0.3rem 0.3rem 0.3rem 0;
    box-sizing: border-box;
  }
  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .info-text {
    position: absolute;
    left: 3.1rem;
    font-weight: 500;
  }
`

export const AdditionalWrapper = styled.div`
  width: 90%;
  height: fit-content;
`

export const AdditionalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .info-box {
    width: 4rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1.2px solid black;
    margin: 1rem 1rem 1rem 0;
  }
  .icon {
    width: 2rem;
    height: 2rem;
  }
  .name {
    text-align: center;
    font-size: 0.6rem;
    font-weight: 400;
    margin-top: 0.4rem;
  }
`
export const DetailContainer = styled.div`
  width: 90%;
  max-width: 364px;
  height: fit-content;
  border-radius: 1rem;
  border: 1px solid #e0e0e0;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  .detail-text {
    line-height: 2rem;
    white-space: pre-line;
  }
`

export const TransactionProcedureContainer = styled.div`
  width: 90%;
  height: fit-content;
  margin-bottom: 1rem;
`

export const LocationWrapper = styled.div`
  width: 90%;
  height: fit-content;
`

export const AdminFeeContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid yellowgreen; */
  margin-bottom: 1rem;
  .price {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .underline {
    width: 100%;
    color: #d7dadd;
  }
  .option {
    display: flex;
    width: 80%;
    justify-content: start;
    margin-top: 0.5rem;
  }
  .txt {
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
  }
`
