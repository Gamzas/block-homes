// import React, { useEffect, useState } from 'react'
// import { GaugeContainer } from './style/GuageStyle'
// import ReactApexChart from 'react-apexcharts'

// const getGaugeColor = steps => {
//   if (steps <= 2) return '#FF0000'
//   if (steps === 3) return '#00FF00'
//   return '#845BD3' // Purple
// }

// const getPointerAngle = steps => {
//   return -90 + (steps * 180) / 5
// }

// const getColorStops = steps => [
//   {
//     offset: 0,
//     color: getGaugeColor(steps),
//     opacity: 1,
//   },
//   {
//     offset: 100,
//     color: getGaugeColor(steps),
//     opacity: 1,
//   },
// ]

// const Gauge = ({ steps }) => {
//   const options = {
//     series: [steps * 20], // 차트에 표시될 데이터. 여기서는 10%를 의미합니다.
//     chart: {
//       type: 'radialBar', // 차트 유형을 레이디얼 바(원형 진행 바)로 설정합니다.
//       offsetY: 0, // 차트의 Y축 위치를 상단으로 20px 올립니다.
//       sparkline: {
//         enabled: false, // 차트 주변의 패딩이나 타이틀 등을 제거하고 차트만 표시합니다.
//       },
//     },
//     plotOptions: {
//       radialBar: {
//         startAngle: -90, // 게이지의 시작 각도를 -90도로 설정합니다.
//         endAngle: 90, // 게이지의 끝 각도를 90도로 설정합니다.
//         track: {
//           background: '#e7e7e7', // 게이지 트랙의 배경 색상을 설정합니다.
//           strokeWidth: '100%', // 트랙의 너비 비율을 설정합니다.
//           margin: 11, // 트랙의 외부 마진을 픽셀 단위로 설정합니다.
//           dropShadow: {
//             // 트랙에 그림자 효과를 추가합니다.
//             enabled: true,
//             top: 2,
//             left: 0,
//             color: '#999',
//             opacity: 1,
//             blur: 2,
//           },
//         },
//         dataLabels: {
//           name: {
//             show: false, // 'name' 레이블을 숨깁니다.
//           },
//           value: {
//             offsetY: -2, // 값 레이블의 위치를 조정합니다.
//             fontSize: '22px', // 값 레이블의 폰트 크기를 설정합니다.
//           },
//         },
//       },
//     },
//     grid: {
//       padding: {
//         top: -10, // 그리드 영역의 상단 패딩을 조정합니다.
//       },
//     },
//     fill: {
//       type: 'gradient',
//       gradient: {
//         shade: 'light',
//         shadeIntensity: 0.4,
//         // inverseColors: false,
//         opacityFrom: 1,
//         opacityTo: 1,
//         stops: [0, 100], // 첫 번째 색상이 0%에서 20%까지, 두 번째 색상이 20%에서 100%까지 적용됩니다.
//         colorStops: getColorStops(steps),
//       },
//     },
//     labels: ['Average Results'], // 차트 레이블을 설정합니다.
//   }

//   const [angle, setAngle] = useState(-90)

//   useEffect(() => {
//     setAngle(getPointerAngle(steps))
//   }, [steps])

//   return (
//     <>
//       <GaugeContainer gaugeColor={getGaugeColor(steps)}>
//         <ReactApexChart
//           options={options}
//           series={options.series}
//           type="radialBar"
//           height={150}
//         />

//         {/* <div
//           className="gauge"
//           style={{
//             background: `conic-gradient(
//           ${getGaugeColor(steps)} 0%, ${getGaugeColor(steps)} ${steps * 10}%,
//           transparent ${steps * 10}%, transparent 100%
//         )`,
//           }}
//         /> */}
//         <div className="pointer" style={{ transform: `rotate(${angle}deg)` }} />
//       </GaugeContainer>
//     </>
//   )
// }

// export default Gauge
