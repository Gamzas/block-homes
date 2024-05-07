import styled from "styled-components";

export const PhotoRegistrationContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 3% 5%;
`

export const PhotoRegistrationSession = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 4%;

    .title {
        width: 100%;
        padding: 2% 0;
    }

    .detail {
        width: 100%;
        font-size: 0.8rem;
        padding: 1% 0;
    }
`

export const PhotoRegistrationImages = styled.div`
    width: 100%;
    display: flex;
    overflow-x: auto;
    flex-wrap: nowrap;

    .images-wrapper {
        display: flex;
        gap: 10px;
    }
`

export const PhotoRegistrationPhoto = styled.div`
    background-color: #F6F6F6;
    margin-top: 2%;
    position: relative;
    cursor: pointer;

    input {
        opacity: 0;
        position: absolute;
        cursor: pointer;
        z-index: 10;
        width: 100%;
        height: 100%;
    }

    .plus {
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        width: 50%;
        height: 50%;
        object-fit: contain;
    }

    .upload {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .cancel {
        position: absolute;
        top: 3px;
        right: 3px;
        width: 27px;
        height: 27px;
        object-fit: cover;
        z-index: 10;
    }
`;


export const PhotoRegistrationPhotoMain = styled(PhotoRegistrationPhoto)`
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
`;


export const PhotoRegistrationPhotoSub = styled(PhotoRegistrationPhoto)`
    width: 150px;
    height: 84.375px;
`;
