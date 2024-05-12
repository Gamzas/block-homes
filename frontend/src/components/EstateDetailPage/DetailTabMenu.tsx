import { useState } from 'react'
import Slider from 'react-slick'
import * as t from '@components/EstateDetailPage/style/DetailTabStyle'
const DetailTabMenu = () => {
  const [currentTab, clickTab] = useState(0)
  const menuArr = [
    {
      name: 'image',
      content: [
        'https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/169087905318351049.jpeg?gif=1&w=480&h=480&c=c&q=80&webp=1',
        'https://ms-housing.kr/data/file/residence_gallery/1893533933_JMZkwRQt_7e007afcf36372f893058c91dcc64b65fed06003.jpg',
        'https://ms-housing.kr/data/file/residence_gallery/1893533933_JMZkwRQt_7e007afcf36372f893058c91dcc64b65fed06003.jpg',
      ],
    },
    {
      name: 'floor_plan',
      content: [
        'https://cdn.bizwatch.co.kr/news/photo/2017/01/09/34f7001900daf6a1d6834b1716c199b8165840.jpg',
        'https://cdn.bizwatch.co.kr/news/photo/2017/01/09/34f7001900daf6a1d6834b1716c199b8165840.jpg',
      ],
    },
    {
      name: '360',
      content: [
        'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MDZfMjI2/MDAxNTg2MTY0MjMyMDg1.rrhT5tfVxYciD0U6Ze4eka95kJtrmSbHKilIQkvZ2KMg.ri446TdMF2fxBzyUlORyT9_E8lwrIlU4DY7Ksh4_JGQg.JPEG.ejejej1775/%EC%95%84%ED%8C%8C%ED%8A%B83d.jpg?type=w800',
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
  }
  const tabMenuArr = ['image', 'floor_plan', '360']
  const selectMenuHandler = (index: number) => {
    clickTab(index)
  }

  return (
    <div>
      <t.Desc>
        <Slider {...settings}>
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
