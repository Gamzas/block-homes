import Footer from "@/common/Footer";
import * as r from '@pages/style/RealEstatePageStyle'
import { Outlet } from "react-router-dom";
const RealEstatePage = () => {
  return (
    <r.Container>
      <Outlet />
      <Footer />
    </r.Container>
  );
};

export default RealEstatePage;