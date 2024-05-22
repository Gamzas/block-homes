const useEstateCondition = (condition: number | string) => {
  const getColor = () => {
    switch (condition) {
      case 1:
      case 'good':
        return {
          main: '#845BD3',
          second: '#D2C5F1',
          third: '#E8E0F7',
          fourth: '#F3F0F7',
        }
      case 2:
      case 'normal':
        return {
          main: '#24d0d6',
          second: '#B9E7E7',
          third: '#C8F6F0',
          fourth: '#E9F7F7',
        }
      case 3:
      case 'bad':
        return {
          main: '#FE754E',
          second: '#FFD1C1',
          third: '#FFD8CD',
          fourth: '#FFE9E1',
        }
      default: {
        return {
          main: '#24d0d6',
          second: '#B9E7E7',
          third: '#C8F6F0',
          fourth: '#E9F7F7',
        }
      }
    }
  }
  const getStatus = () => {
    switch (condition) {
      case 1:
      case 'good':
        return '우수'
      case 2:
      case 'normal':
        return '보통'
      case 3:
      case 'bad':
        return '위험'
    }
  }
  return { getColor, getStatus }
}

export default useEstateCondition