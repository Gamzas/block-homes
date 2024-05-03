import React, { useEffect, useState } from 'react'
import { GaugeContainer } from './style/GuageStyle'
import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
const getGaugeColor = steps => {
  if (steps <= 2) return '#FF0000'
  if (steps <= 4) return '#FFA500'
  return '#845BD3' // Purple
}

const getStatusMessage = steps => {
  if (steps <= 2) return '위험'
  if (steps <= 4) return '경계'
  return '안전'
}

const getPointerAngle = steps => {
  return -90 + (steps * 180) / 5
}

const getColorStops = steps => [
  {
    offset: 0,
    color: getGaugeColor(steps),
    opacity: 1,
  },
  {
    offset: 100,
    color: getGaugeColor(steps),
    opacity: 1,
  },
]

const Gauge = ({ steps }) => {
  const options: ApexOptions = {
    series: [steps * 20],
    chart: {
      type: 'radialBar',
      offsetY: 0,
      sparkline: {
        enabled: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: '#e7e7e7',
          strokeWidth: '100%',
          margin: 13,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 0.1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '0px',
          },
        },
      },
    },
    grid: {
      padding: {
        top: -19,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        // inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        colorStops: getColorStops(steps),
      },
    },
    labels: ['Average Results'], // 차트 레이블을 설정
  }

  const [angle, setAngle] = useState(-90)

  useEffect(() => {
    setAngle(getPointerAngle(steps))
  }, [steps])

  return (
    <>
      <GaugeContainer>
        <ReactApexChart
          series={options.series}
          type="radialBar"
          options={options}
          // width={400}
          height={180}
        />
        <div className="status-text" style={{ color: getGaugeColor(steps) }}>
          {' '}
          {getStatusMessage(steps)}
        </div>

        <div
          className="pointer"
          style={{
            transform: `rotate(${angle}deg)`,
          }}
        ></div>
      </GaugeContainer>
    </>
  )
}

export default Gauge
