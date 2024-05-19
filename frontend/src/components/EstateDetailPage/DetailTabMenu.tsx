import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import * as t from '@components/EstateDetailPage/style/DetailTabStyle'
import { ImageUrlType } from '@/types/api/itemType'

interface PropsType {
  imgUrl: ImageUrlType[]
}

const DetailTabMenu = ({ imgUrl }: PropsType) => {
  const [currentTab, clickTab] = useState(0)
  const [images, setImages] = useState<string[]>([])
  const sliderRef = useRef(null)
  const getCategoryImages = (index: number) => {
    return imgUrl
      .filter(url => url.itemImageCategory === index)
      .map(item => item.imageUrl)
  }
  useEffect(() => {
    const initializeImages = () => {
      const initialImages = getCategoryImages(1)
      setImages(initialImages)
    }
    initializeImages()
  }, [imgUrl])

  useEffect(() => {
    const updateImages = () => {
      const menuArr = [
        getCategoryImages(1),
        getCategoryImages(2).length === 0
          ? ['/image/image_no_img.jpg']
          : getCategoryImages(2),
        getCategoryImages(3).length === 0
          ? ['/image/image_no_img.jpg']
          : getCategoryImages(3),
      ]
      setImages(menuArr[currentTab])
    }

    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0) // 슬라이더를 첫 번째 슬라이드로 이동
    }
    updateImages()
  }, [currentTab, imgUrl])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    dotsClass: 'slick-dots',
    arrows: false,
  }
  const tabMenuArr = ['image', 'room', 'kitchen']
  const selectMenuHandler = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0) // 슬라이더를 첫 번째 슬라이드로 이동
    }
    clickTab(index)
  }

  // 이미지 로드 오류 핸들러
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.src = '/image/image_no_img.jpg'
  }

  return (
    <div>
      <t.Desc>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="desc-img"
                src={image}
                alt={`Slide ${index}`}
                onError={handleImageError} // 이미지 로드 오류 시 대체 이미지 설정
                // style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </Slider>
      </t.Desc>
      <t.TabMenuImgContainer>
        {tabMenuArr.map((menu, index) => (
          <div
            className="icon-container"
            key={index}
            onClick={() => selectMenuHandler(index)}
          >
            <img
              className="tab-icon"
              src={`/icon/icon_tab_${menu}.png`}
              alt="탭아이콘"
            />
          </div>
        ))}
      </t.TabMenuImgContainer>
      <t.TabMenu>
        {tabMenuArr.map((_, index) => (
          <li
            key={index}
            className={index === currentTab ? 'submenu focused' : 'submenu'}
            onClick={() => selectMenuHandler(index)}
          ></li>
        ))}
      </t.TabMenu>
    </div>
  )
}

export default DetailTabMenu
