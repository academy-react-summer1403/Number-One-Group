import { useParams } from "react-router-dom";
import configVariants from "../../../config/page-transition"
import { BreadCrumb, TitleSection } from "../../partials/title-section"
import { useQueryWithDependencies } from "../../../core/hooks/react-query";
import GetShopDetails from "../../../core/services/api/get-data/GetShopDetails";
import { motion } from "framer-motion";

const ShopDetailsWrapper = () => {
  const { id } = useParams();
  // Find the details of the selected event
  const { data: SelectedShop } = useQueryWithDependencies("GET_SHOP_DETAILS", GetShopDetails, id, id)

  return (
    <motion.div
      variants={configVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      <TitleSection title={SelectedShop?.name} >
        <BreadCrumb href={'/shops'} text={'ShopSection'} />
        <BreadCrumb type="Div" text={SelectedShop?.name} />
      </TitleSection>

    </motion.div>
  )
}

export default ShopDetailsWrapper