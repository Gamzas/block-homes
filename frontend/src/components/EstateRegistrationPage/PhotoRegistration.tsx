import * as p from '@components/EstateRegistrationPage/style/PhotoRegistrationStyle'


const PhotoRegistration = ({ photoRegistrationProps, setPhotoRegistrationProps }) => {
  const photoSessions = [{
    title: '거실 / 방 사진',
    detail: '구조를 파악할 수 있도록 모든 방의 사진을 다양한 각도로 찍어주세요.',
    images: photoRegistrationProps.roomImages,
  }, {
    title: '주방 / 화장실 사진',
    detail: '주방과 화장실 사진을 올려주세요.',
    images: photoRegistrationProps.kitchenToiletImages,
  }]

  const handleMainImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      setPhotoRegistrationProps((currentParams) => ({
        ...currentParams,
        mainImage: files[0],
      }))
    }
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const files = event.target.files
    if (files) {
      const imageFiles = Array.from(files)

      setPhotoRegistrationProps(currentParams => {
        if (index === 0) {
          // 방 이미지 업데이트
          const updatedRoomImages = [...currentParams.roomImages, ...imageFiles]
          return {
            ...currentParams,
            roomImages: updatedRoomImages,
          }
        } else if (index === 1) {
          // 주방/화장실 이미지 업데이트
          const updatedKitchenToiletImages = [...currentParams.kitchenToiletImages, ...imageFiles]
          return {
            ...currentParams,
            kitchenToiletImages: updatedKitchenToiletImages,
          }
        }
        return currentParams // 기본 경우, 변화 없음
      })
    }
  }

  const removeImage = (sessionIndex, imageIndex) => {
    setPhotoRegistrationProps(currentParams => {
      if (sessionIndex === 0) {
        // 방 이미지 업데이트
        const updatedRoomImages = currentParams.roomImages.splice(imageIndex, 1)
        return {
          ...currentParams,
          roomImages: updatedRoomImages,
        }
      } else if (sessionIndex === 1) {
        // 주방/화장실 이미지 업데이트
        const updatedKitchenToiletImages = currentParams.kitchenToiletImages.splice(imageIndex, 1)
        return {
          ...currentParams,
          kitchenToiletImages: updatedKitchenToiletImages,
        }
      }
      return currentParams // 기본 경우, 변화 없음
    })
  }

  return (
    <p.PhotoRegistrationContainer>
      <p.PhotoRegistrationSession>
        <div className="title">매물 대표 사진</div>
        <div className="detail">매물을 대표하는 사진입니다.</div>
        <p.PhotoRegistrationPhotoMain>
          {photoRegistrationProps.mainImage ? (
            <>
              <img className="upload"
                   src={URL.createObjectURL(photoRegistrationProps.mainImage)}
                   alt="Uploaded"
              />
              <img
                className="cancel"
                onClick={() => setPhotoRegistrationProps((currentParams) => ({
                  ...currentParams,
                  mainImage: '',
                }))}
                src="/icon/icon_cancel.png"
                alt="Cancel Icon"
              />
            </>
          ) : (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={handleMainImageChange}
              />
              <img className="plus" src="/icon/icon_plus.png" alt="Upload Icon" />
            </>
          )}
        </p.PhotoRegistrationPhotoMain>
      </p.PhotoRegistrationSession>

      {photoSessions.map((session, sessionIndex) =>
        <p.PhotoRegistrationSession key={sessionIndex}>
          <div className="title">{session.title}</div>
          <div className="detail">{session.detail}</div>
          <p.PhotoRegistrationImages>
            <div className="images-wrapper">
              {session.images.map((image, imgIndex) => (
                <p.PhotoRegistrationPhotoSub key={sessionIndex}>
                  <img className="upload" key={sessionIndex} src={URL.createObjectURL(image)}
                       alt={`Uploaded ${imgIndex}`} />
                  <img className="cancel" onClick={() => removeImage(sessionIndex, imgIndex)}
                       src="/icon/icon_cancel.png"
                       alt="Cancel Icon" />
                </p.PhotoRegistrationPhotoSub>
              ))}
              <p.PhotoRegistrationPhotoSub>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, sessionIndex)}
                />
                <img className="plus" src="/icon/icon_plus.png" alt="Upload Icon" />
              </p.PhotoRegistrationPhotoSub>
            </div>
          </p.PhotoRegistrationImages>
        </p.PhotoRegistrationSession>)}
    </p.PhotoRegistrationContainer>
  )
}

export default PhotoRegistration
