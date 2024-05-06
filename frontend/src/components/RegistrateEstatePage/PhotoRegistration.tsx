import { useState } from 'react'
import * as p from '@components/RegistrateEstatePage/style/PhotoRegistrationStyle'


const PhotoRegistration = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedImage(files[0]);
    }
  };

  return (
    <p.PhotoRegistrationContainer>
      <p.PhotoRegistrationSession>
        <div className="title">매물 대표 사진</div>
        <div className="detail">매물을 대표하는 사진입니다.</div>
        <p.PhotoRegistrationPhoto>
          {selectedImage ? (
            <>
              <img className="upload"
                   src={URL.createObjectURL(selectedImage)}
                   alt="Uploaded"
              />
              <img className="cancel" onClick={() => setSelectedImage(null)} src="/icon/icon_cancel.png"
                   alt="Cancel Icon" />
            </>
          ) : (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <img className="plus" src="/icon/icon_plus.png" alt="Upload Icon" />
            </>
          )}
        </p.PhotoRegistrationPhoto>
      </p.PhotoRegistrationSession>
      <p.PhotoRegistrationSession>
        <div className="title">거실 / 방 사진</div>
        <div className="detail">구조를 파악할 수 있도록 모든 방의 사진을 다양한 각도로 찍어주세요.</div>
        <p.PhotoRegistrationPhoto>
          {selectedImage ? (
            <>
              <img className="upload"
                   src={URL.createObjectURL(selectedImage)}
                   alt="Uploaded"
              />
              <img className="cancel" onClick={() => setSelectedImage(null)} src="/icon/icon_cancel.png"
                   alt="Cancel Icon" />
            </>
          ) : (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              <img className="plus" src="/icon/icon_plus.png" alt="Upload Icon" />
            </>
          )}
        </p.PhotoRegistrationPhoto>
      </p.PhotoRegistrationSession>
    </p.PhotoRegistrationContainer>
  )
}

export default PhotoRegistration;
