import styled from "styled-components";




export const StepContainer = styled.div`
    width: 390px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    color: black;

    .step-div{
        /* border: 1px solid; */
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .line{
        width: 88px;
        height: 2px;
        background: #D9D9D9;
        margin: 0 8px;
    }
`

export const StepCard = styled.div`
    position: relative;

    .step-text{
        width: 80px;
        position: absolute;
        top: 45px;
        left: -27px;
        text-align: center;
        color: #CFC3C3;
    }

    .step-current-text{
        width: 80px;
        position: absolute;
        top: 45px;
        left: -27px;
        text-align: center;
    }
    

`