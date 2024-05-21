import styled from 'styled-components'

export const ContractListContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
`

export const UserTypeToggleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);

  .tenant,
  .landlord {
    font-weight: 300;
    font-size: 0.9rem;
    cursor: pointer;
    border: 1px #845bd3 solid;
    color: #845bd3;
    background-color: white;

    &:hover {
      background-color: #eee;
    }

    &:focus {
      border: 1px #845bd3 solid;
      outline: none;
      background-color: #845bd3;
      color: #ffffff;
    }
  }

  .tenant {
    border-radius: 5rem 0 0 5rem;
  }

  .landlord {
    border-radius: 0 5rem 5rem 0;
  }

  .tenant.active,
  .landlord.active {
    background-color: #845bd3;
    color: #fff;
    border: 1px solid #845bd3;
  }
`
