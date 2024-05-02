import Carousel from 'react-spring-3d-carousel'
import { useEffect, useState } from 'react'
import { config } from 'react-spring'
import * as c from '@components/MainPage/style/CustomCarouselStyle'

const CustomCarousel = props => {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) }
  })

  const [offsetRadius, setOffsetRadius] = useState(4)
  const [showArrows, setShowArrows] = useState(false)
  const [goToSlide, setGoToSlide] = useState(null)
  const [cards] = useState(table)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  useEffect(() => {
    setOffsetRadius(props.offset)
    setShowArrows(props.showArrows)
  }, [props.offset, props.showArrows])

  const handleMouseDown = e => {
    setIsDragging(true)
    setStartX(e.screenX)
  }

  const handleMouseMove = e => {
    if (isDragging) {
      const currentX = e.screenX
      const diffX = currentX - startX
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          setGoToSlide(prev => (prev === 0 ? cards.length - 1 : prev - 1))
        } else {
          setGoToSlide(prev => (prev === cards.length - 1 ? 0 : prev + 1))
        }
        setIsDragging(false)
      }
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <c.CustomCarouselContainer
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </c.CustomCarouselContainer>
  )
}

export default CustomCarousel
