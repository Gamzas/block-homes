import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
const Graph = () => {
  const series = [
    {
      name: '전세금',
      data: [100000000, 150000000, 190000000, 300000000, 100000000, 100000000],
    },
  ]
  const options: ApexOptions = {
    chart: {
      height: 180,
      width: '100%',
      type: 'area',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: '전세금 변화 추이',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0,
      },
    },
    xaxis: {
      categories: ['2014', '2016', '2018', '2020', '2022', '2024'],
      labels: {
        style: {
          fontSize: '10px',
          fontWeight: '600',
        },
      },
      crosshairs: {
        show: false, // X축 crosshairs 비활성화
      },
    },
    yaxis: {
      show: false, // Y축 숨김
      labels: {
        formatter: value => {
          return `${value / 100000000}억원` // 1억원 단위로 포맷팅
        },
      },
    },
    tooltip: {
      enabled: true, // 툴팁 활성화
    },
  }
  return (
    <>
      <div
        style={{
          marginLeft: '2rem',
          marginTop: '1rem',
        }}
      >
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={180}
          width={320}
        />
      </div>
    </>
  )
}

export default Graph
