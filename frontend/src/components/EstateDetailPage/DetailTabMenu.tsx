import { useRef, useState } from 'react'
import Slider from 'react-slick'
import * as t from '@components/EstateDetailPage/style/DetailTabStyle'
import { ImageUrlType } from '@/types/api/itemType'

interface PropsType {
  imgUrl: ImageUrlType[]
}

const DetailTabMenu = (props: PropsType) => {
  console.log(props.imgUrl)

  const [currentTab, clickTab] = useState(0)
  const sliderRef = useRef(null)
  const menuArr = [
    {
      name: 'image',
      content: [
        `${props.imgUrl[0].imageUrl}`,
        'https://ms-housing.kr/data/file/residence_gallery/1893533933_JMZkwRQt_7e007afcf36372f893058c91dcc64b65fed06003.jpg',
        'https://cdn.imweb.me/thumbnail/20211222/c0a271a8dfdcf.jpg',
      ],
    },
    {
      name: 'floor_plan',
      content: [
        'https://cdn.bizwatch.co.kr/news/photo/2017/01/09/34f7001900daf6a1d6834b1716c199b8165840.jpg',
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/165447962465729230.png?gif=1&w=480&h=480&c=c&q=80',
      ],
    },
    {
      name: '360',
      content: [
        'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MDZfMjI2/MDAxNTg2MTY0MjMyMDg1.rrhT5tfVxYciD0U6Ze4eka95kJtrmSbHKilIQkvZ2KMg.ri446TdMF2fxBzyUlORyT9_E8lwrIlU4DY7Ksh4_JGQg.JPEG.ejejej1775/%EC%95%84%ED%8C%8C%ED%8A%B83d.jpg?type=w800',
        'https://blog.kakaocdn.net/dn/buOonG/btqOizVak2A/4SNqcJaiiaJYwg655ZokS1/img.png',
      ],
    },
  ]
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
  const tabMenuArr = ['image', 'floor_plan', '360']
  const selectMenuHandler = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0) // 슬라이더를 첫 번째 슬라이드로 이동
    }
    clickTab(index)
  }

  return (
    <div>
      <t.Desc>
        <Slider ref={sliderRef} {...settings}>
          {menuArr[currentTab].content.map((image, index) => (
            <div key={index}>
              <img className="desc-img" src={image} alt={`Slide ${index}`} />
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
        {menuArr.map((_, index) => (
          <li
            className={index === currentTab ? 'submenu focused' : 'submenu'}
            onClick={() => selectMenuHandler(index)}
          ></li>
        ))}
      </t.TabMenu>
    </div>
  )
}

export default DetailTabMenu
