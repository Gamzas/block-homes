import Carousel from 'react-spring-3d-carousel'
import { useEffect, useState } from 'react'
import { config } from 'react-spring'

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) }
  })

  const [offsetRadius, setOffsetRadius] = useState(4)
  const [showArrows, setShowArrows] = useState(false)
  const [goToSlide, setGoToSlide] = useState(null)
  const [cards] = useState(table)

  useEffect(() => {
    setOffsetRadius(props.offset)
    setShowArrows(props.showArrows)
  }, [props.offset, props.showArrows])

  return (
    <Carousel
      slides={cards}
      goToSlide={goToSlide}
      offsetRadius={offsetRadius}
      showNavigation={showArrows}
      animationConfig={config.gentle}
    />
  )
}
