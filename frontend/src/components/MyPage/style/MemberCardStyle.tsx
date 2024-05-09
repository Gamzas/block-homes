import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  height: 20rem;
  background: rgba(177, 137, 255, 0.26);
  position: relative;
  .logo-img {
    width: 5.10313rem;
    height: 2.67288rem;
    position: absolute;
    top: 2rem;
    left: 1.5rem;
  }

  .house-img {
    width: 13rem;
    height: 13rem;
    position: absolute;
    right: 0rem;
    bottom: -1.5rem;
    z-index: 0;
    opacity: 30%;
  }
`
export const ProfileContainer = styled.div`
  .profile-box,
  .user-name {
    position: absolute;
    bottom: 1.5rem;
  }

  .profile-box {
    width: 4.125rem;
    height: 4.125rem;
    border-radius: 1.25rem;
    background: #a77cf9;
    left: 1.5rem;
  }
  .profile-img {
    width: 3.93938rem;
    height: 4rem;
  }
  .user-name {
    color: #000;
    font-size: 1.625rem;
    font-weight: 600;
    line-height: 1rem;
    z-index: 1;
    left: 6.5rem;
    margin-bottom: 0.7rem;
    span {
      color: #555050;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1rem;
      letter-spacing: -0.03125rem;
    }
  }
`
