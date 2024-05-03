import { ReportWaveContainer } from './style/ReportWaveContainerStyle'

const ReportWave = () => {
  return (
    <ReportWaveContainer>
      <svg
        className="big-wave"
        xmlns="http://www.w3.org/2000/svg"
        width="380"
        height="200"
        viewBox="0 0 364 217"
        fill="none"
      >
        <g filter="url(#filter0_d_323_1098)">
          <path
            d="M108.533 -7.87243C31.2106 -3.39736 -15.8766 52.1681 -29.7549 79.3914V217H445.33V-1C431.947 15.566 378.842 79.1686 310.441 87C242.041 94.8315 205.185 -13.4663 108.533 -7.87243Z"
            fill="#E8E0F7"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_323_1098"
            x="-33.7549"
            y="-8.08203"
            width="483.084"
            height="233.082"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_323_1098"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_323_1098"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <svg
        className="small-wave"
        xmlns="http://www.w3.org/2000/svg"
        width="380"
        height="143"
        viewBox="0 0 364 143"
        fill="none"
      >
        <path
          d="M143.552 9.08589C66.2299 11.9226 5.94375 99.98 -7.93457 117.237V146H467.15V0C453.767 10.501 440.831 49.0357 372.431 54C304.03 58.9643 240.204 5.54002 143.552 9.08589Z"
          fill="#D2C5F1"
        />
      </svg>
    </ReportWaveContainer>
  )
}

export default ReportWave
