import * as n from '@components/EstateList/styles/NoEstateItemStyle'

const NoEstateItem = () => {
  return (
    <n.NoEstateItemWrapper>
      <n.ContentContainer>
        <img className='img' src="/image/image_profile.png" alt="" />
        <div className='txt'>해당 지역에 등록된 매물이 없습니다.</div>
      </n.ContentContainer>
      
    </n.NoEstateItemWrapper>
  );
};

export default NoEstateItem;