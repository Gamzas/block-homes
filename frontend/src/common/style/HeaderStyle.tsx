import styled from 'styled-components'

export const HeaderContainer = styled.div`
    border-bottom: 1px solid #adadad;
    width: 100%;
    max-width: 390px;
    height: 50px;
    background-color: white;
    position: fixed;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem;

    .right-icon {
        width: 25px;
        height: 25px;
    }
`

export const HeaderLeftContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 92%;

    .back-arrow {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        cursor: pointer;
    }

    .title {
        font-size: 1.2rem;
    }
`
