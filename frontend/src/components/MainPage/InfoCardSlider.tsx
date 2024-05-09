import InfoCardReport from '@components/MainPage/InfoCardReport'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as i from '@components/MainPage/style/InfoCardSliderStyle'
import InfoCardSafe from '@components/MainPage/InfoCardSafe'
import InfoCardProcess from '@components/MainPage/InfoCardProcess'

const InfoCardSlider = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '6%',
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    dots: true,
  }

  return (
    <i.SliderContainer className="slider-container">
      <Slider {...settings}>
        <InfoCardProcess />
        <InfoCardReport />
        <InfoCardSafe />
      </Slider>
    </i.SliderContainer>
  )
}

export default InfoCardSlider
