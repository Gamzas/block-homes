import * as r from '@components/MainPage/style/RealEstateCategoryStyle'
import { RealEstateCategoryType } from '@/types/estateListType'

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

  return (
    <r.RealEstateCategoryContainer>
      <div className="real-estate-category-info-text">
        어떤 집을 찾고 계세요?
      </div>
      <r.RealEstateCategories>
        {realEstateCategoryList.map((realEstateCategory, index) => (
          <r.CategoryContainer key={index}>
            <div className="category-title">{realEstateCategory.title}</div>
            <div className="category-transaction-type">
              {realEstateCategory.transactionType1}
            </div>
            <div className="category-transaction-type">
              {realEstateCategory.transactionType2}
            </div>
            <img
              alt={`${realEstateCategory.title}`}
              src={`${realEstateCategory.src}`}
              className="category-img"
            />
          </r.CategoryContainer>
        ))}
      </r.RealEstateCategories>
    </r.RealEstateCategoryContainer>
  )
}

export default RealEstateCategory
