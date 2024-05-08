import {useState} from 'react'
import * as p from '@components/EstateRegistrationPage/style/PhotoRegistrationStyle'


const PhotoRegistration = () => {
    const photoSessions = [{
        title: "거실 / 방 사진",
        detail: "구조를 파악할 수 있도록 모든 방의 사진을 다양한 각도로 찍어주세요.",
        images: []
    }, {
        title: "주방 / 화장실 사진",
        detail: "주방과 화장실 사진을 올려주세요.",
        images: []
    }];
    const [selectedMainImage, setselectedMainImage] = useState<File | null>(null);
    const [photoSessionsState, setPhotoSessionsState] = useState(photoSessions);

    const handleMainImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setselectedMainImage(files[0]);
        }
    };

    const handleImageChange = (event, index) => {
        if (event.target.files) {
            const imageFiles = Array.from(event.target.files);
            const updatedSessions = [...photoSessionsState];
            updatedSessions[index].images = [...updatedSessions[index].images, ...imageFiles];
            setPhotoSessionsState(updatedSessions);
        }
    };

    const removeImage = (sessionIndex, imageIndex) => {
        const updatedSessions = [...photoSessionsState];
        updatedSessions[sessionIndex].images.splice(imageIndex, 1);
        setPhotoSessionsState(updatedSessions);
    };

    return (
        <p.PhotoRegistrationContainer>
            <p.PhotoRegistrationSession>
                <div className="title">매물 대표 사진</div>
                <div className="detail">매물을 대표하는 사진입니다.</div>
                <p.PhotoRegistrationPhotoMain>
                    {selectedMainImage ? (
                        <>
                            <img className="upload"
                                 src={URL.createObjectURL(selectedMainImage)}
                                 alt="Uploaded"
                            />
                            <img className="cancel" onClick={() => setselectedMainImage(null)}
                                 src="/icon/icon_cancel.png"
                                 alt="Cancel Icon"/>
                        </>
                    ) : (
                        <>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleMainImageChange}
                            />
                            <img className="plus" src="/icon/icon_plus.png" alt="Upload Icon"/>
                        </>
                    )}
                </p.PhotoRegistrationPhotoMain>
            </p.PhotoRegistrationSession>

            {photoSessionsState.map((session, sessionIndex) =>
                <p.PhotoRegistrationSession key={sessionIndex}>
                    <div className="title">{session.title}</div>
                    <div className="detail">{session.detail}</div>
                    <p.PhotoRegistrationImages>
                        <div className="images-wrapper">
                            {session.images.map((image, imgIndex) => (
                                <p.PhotoRegistrationPhotoSub key={sessionIndex}>
                                    <img className="upload" key={sessionIndex} src={URL.createObjectURL(image)}
                                         alt={`Uploaded ${imgIndex}`}/>
                                    <img className="cancel" onClick={() => removeImage(sessionIndex, imgIndex)}
                                         src="/icon/icon_cancel.png"
                                         alt="Cancel Icon"/>
                                </p.PhotoRegistrationPhotoSub>
                            ))}
                            <p.PhotoRegistrationPhotoSub>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageChange(e, sessionIndex)}
                                />
                                <img className="plus" src="/icon/icon_plus.png" alt="Upload Icon"/>
                            </p.PhotoRegistrationPhotoSub>
                        </div>
                    </p.PhotoRegistrationImages>
                </p.PhotoRegistrationSession>)}
        </p.PhotoRegistrationContainer>
    )
}

export default PhotoRegistration;
