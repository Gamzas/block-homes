import * as b from '@common/style/WaveContainerStyle'

const WaveContainer = () => {
  return (
    <b.WaveContainer>
      <svg className="big-wave" xmlns="http://www.w3.org/2000/svg" width="390" height="205" viewBox="0 0 390 205"
           fill="none">
        <path
          d="M98.1127 0.116265C-9.30518 4.19355 -74.7199 54.8199 -94 79.6234V205H566V45.9858C547.408 61.0793 541.473 144.946 446.449 152.081C351.426 159.216 232.385 -4.98034 98.1127 0.116265Z"
          fill="#E8E0F7" />
      </svg>
      <svg className="small-wave" xmlns="http://www.w3.org/2000/svg" width="390" height="123" viewBox="0 0 390 123"
           fill="none">
        <path
          d="M144.608 0.0771085C42.7236 2.62392 -36.7131 81.6828 -55 97.1759V123H571V72.3847C553.366 81.8126 545.862 84.4552 455.734 88.9122C365.605 93.3691 271.963 -3.10641 144.608 0.0771085Z"
          fill="#D3C3F0" />
      </svg>
    </b.WaveContainer>
  )
}

export default WaveContainer