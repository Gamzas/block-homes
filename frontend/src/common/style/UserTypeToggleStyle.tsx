import styled from 'styled-components'

export const UserTypeToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  z-index: 2;

  .tenant,
  .landlord {
    font-weight: 300;
    font-size: 0.9rem;
    padding: 0.3rem 1.2rem;
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
