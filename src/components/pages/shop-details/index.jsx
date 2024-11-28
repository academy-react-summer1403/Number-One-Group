import { useParams } from "react-router-dom";
import configVariants from "../../../config/page-transition"
import { BreadCrumb, TitleSection } from "../../partials/title-section"
import { useQueryWithDependencies } from "../../../core/hooks/react-query";
import GetShopDetails from "../../../core/services/api/get-data/GetShopDetails";
import { motion } from "framer-motion";
import fallback from "../../../assets/images/image-not-found.png"
import { ImageFallBack } from "../../common";


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
      <div className="xl:w-9/12 w-[88%]  mx-auto my-20 relative  cursor-default">
        <ImageFallBack
          src={SelectedShop?.img}
          className="w-full md:h-[450px] rounded-xl"
          fallback={fallback}
        />
      </div>

    </motion.div>
  )
}

export default ShopDetailsWrapper