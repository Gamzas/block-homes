import EstateListMap from "@/components/EstateList/EstateListMap";
import Header from "@/common/Header";
import Footer from "@/common/Footer";
import * as r from '@pages/style/RealEstatePageStyle'
const RealEstatePage = () => {
  return (
    <r.Container>
      <Header />
      <EstateListMap />
      <Footer />
    </r.Container>
  );
};

export default RealEstatePage;