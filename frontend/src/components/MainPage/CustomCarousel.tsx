import Carousel from 'react-spring-3d-carousel'
import React, { useEffect, useState } from 'react'
import { config } from 'react-spring'
import * as c from '@components/MainPage/style/CustomCarouselStyle'

const CustomCarousel = ({
  cards,
  offset,
  currentCenterIndex,
  setCurrentCenterIndex,
}) => {
  const [offsetRadius, setOffsetRadius] = useState(4)
  const [showArrows, setShowArrows] = useState(false)
  const [showNavigation, setShowNavigation] = useState(false)
  const [goToSlide, setGoToSlide] = useState(currentCenterIndex)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  useEffect(() => {
    setOffsetRadius(offset)
    setShowArrows(true)
    setShowNavigation(false)
  }, [offset, showArrows, showNavigation])

  const handleSelect = index => {
    if (index !== currentCenterIndex) {
      setGoToSlide(index)
      setCurrentCenterIndex(index)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].screenX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      const currentX = e.touches[0].screenX
      const diffX = currentX - startX
      if (Math.abs(diffX) > 50) {
        handleSelect(
          diffX > 0
            ? goToSlide === 0
              ? cards.length - 1
              : goToSlide - 1
            : goToSlide === cards.length - 1
              ? 0
              : goToSlide + 1,
        )
        setIsDragging(false)
      }
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleMouseDown = e => {
    setIsDragging(true)
    setStartX(e.screenX)
  }

  const handleMouseMove = e => {
    if (isDragging) {
      const currentX = e.screenX
      const diffX = currentX - startX
      if (Math.abs(diffX) > 50) {
        handleSelect(
          diffX > 0
            ? goToSlide === 0
              ? cards.length - 1
              : goToSlide - 1
            : goToSlide === cards.length - 1
              ? 0
              : goToSlide + 1,
        )
        setIsDragging(false)
      }
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <c.CustomCarouselContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={config.gentle}
      />
    </c.CustomCarouselContainer>
  )
}

export default CustomCarousel
