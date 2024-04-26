import { RealEstateCategoryType } from '@/types/realEstate'

const RealEstateCategory = () => {
  const realEstateCategoryList: RealEstateCategoryType[] = [
    {
      src: 'public/image/image_apartment.png',
      title: '아파트',
      transactionType1: '매매',
      transactionType2: '전 · 월세',
    },
    {
      src: 'public/image/image_villa_or_tworoom.png',
      title: '빌라 · 투룸 +',
      transactionType1: '매매',
      transactionType2: '전 · 월세',
    },
    {
      src: 'public/image/image_oneroom.png',
      title: '원룸',
      transactionType1: '전 · 월세',
      transactionType2: null,
    },
    {
      src: 'public/image/image_officetels.png',
      title: '오피스텔',
      transactionType1: '전 · 월세',
      transactionType2: null,
    },
  ]

  return <div></div>
}

export default RealEstateCategory
