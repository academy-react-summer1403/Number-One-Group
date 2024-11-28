import { useParams } from "react-router-dom";
import configVariants from "../../../config/page-transition"
import { BreadCrumb, TitleSection } from "../../partials/title-section"
import { useQueryWithDependencies } from "../../../core/hooks/react-query";
import GetShopDetails from "../../../core/services/api/get-data/GetShopDetails";
import { motion } from "framer-motion";
import fallback from "../../../assets/images/image-not-found.png"
import { CustomMap, DetailsBox, ImageFallBack } from "../../common";
import { FaHourglassStart } from "react-icons/fa";


const ShopDetailsWrapper = () => {
  const { id } = useParams();
  // Find the details of the selected event
  const { data: SelectedShop } = useQueryWithDependencies("GET_SHOP_DETAILS", GetShopDetails, id, id)

  const DetailsShop = [
    { titleDetail: "startTime", countDetail: SelectedShop?.startTime, iconDetail: <FaHourglassStart width={18} height={18} color="gray" /> },
    { titleDetail: "endTime", countDetail: SelectedShop?.endTime, iconDetail: <FaHourglassStart width={18} height={18} className="rotate-180" color="gray" /> },
]

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
        <div className="flex max-lg:flex-wrap gap-7">
          <div className="flex flex-wrap gap-y-7 min-w-72 w-full lg:w-72 lg:-mt-14 lg:ml-7">
            <DetailsBox
              variant="shop-detail"
              styleDisplay="hidden"
              Detail={DetailsShop}
              arrowColor={"#fff"}
              colorButton={"purple"}
              btnText={"JoinShop"}
              detailInfo={"shopInfo"}
              shareText={"ShareShop"}
            />
            <div className={`w-full h-[288px] Box-shadow1 p-5 bg-white rounded-lg`}>
              <CustomMap width={"100%"} height={"100%"} />
            </div>
          </div>
        </div>

      </div>

    </motion.div>
  )
}

export default ShopDetailsWrapper