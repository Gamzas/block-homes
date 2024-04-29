import Footer from "@/common/Footer";
import Header from "@/common/Header";
import * as r from '@pages/style/RealEstatePageStyle'
import { Outlet } from "react-router-dom";
const RealEstatePage = () => {
  return (
    <r.Container>
      <Header title={'매물 조회하기'} isSearch={true} rightIconSrc={"public/icon/icon_map.png"}/>
      <Outlet />
      <Footer />
    </r.Container>
  );
};

export default RealEstatePage;