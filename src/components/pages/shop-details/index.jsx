import { useParams } from "react-router-dom";
import configVariants from "../../../config/page-transition"
import { BreadCrumb, TitleSection } from "../../partials/title-section"
import { useQueryWithDependencies, useQueryWithoutDependencies } from "../../../core/hooks/react-query";
import GetShopDetails from "../../../core/services/api/get-data/GetShopDetails";
import { motion } from "framer-motion";
import fallback from "../../../assets/images/shops.png"
import { CustomMap, DetailsBox, ImageFallBack, OverView_Details, RelatedItems, Title_details } from "../../common";
import { FaHourglassStart } from "react-icons/fa";
import ShopCardWrapper from "../shops/ShopCardWrapper";
import { GetProductsLength } from "../../../core/services/api/get-data";
import { useEffect, useState } from "react";
import RenderRelatedItems from "../../common/details-pages/RenderRelatedItems";
import ProductCardWrapper from "../product/ProductCardWrapper";


const ShopDetailsWrapper = () => {
  const { id } = useParams();
  const [relatedProducts, setRelatedProducts] = useState()
  // Find the details of the selected event
  const { data: SelectedShop, isSuccess } = useQueryWithDependencies("GET_SHOP_DETAILS", GetShopDetails, id, id)
  // Get Products List 
  const { data: totalCount, isSuccess: countSuccess, isLoading, refetch } =
    useQueryWithoutDependencies("GET_PRODUCTS_LENGTH", GetProductsLength)

  const DetailsShop = [
    { titleDetail: "startTime", countDetail: SelectedShop?.startTime, iconDetail: <FaHourglassStart width={18} height={18} color="gray" /> },
    { titleDetail: "endTime", countDetail: SelectedShop?.endTime, iconDetail: <FaHourglassStart width={18} height={18} className="rotate-180" color="gray" /> },
  ]

  // Get the products of this store
  const handleGetProducts = () => {
    const product = totalCount?.filter(item => item.shopId == SelectedShop?.id)
    console.log(product)
    setRelatedProducts(product)
  }

  useEffect(() => {
    handleGetProducts()
  }, [countSuccess, isSuccess])



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
        <div className="flex max-lg:flex-wrap gap-7 justify-between">
          <div className="max-lg:w-full">
            <Title_details
              title={SelectedShop?.name}
              styleDisplay={'hidden'}
              differentDetail={SelectedShop?.address}
              variant={"event-detail"}
            />
            <OverView_Details
              title={'shopOverview'}
              describe={SelectedShop?.aboutUs}
            />
          </div>
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
        <RenderRelatedItems
          title={"ProductSection"}
          RenderItem={ProductCardWrapper}
          renderData={relatedProducts && relatedProducts}
          isSuccess={countSuccess}
          isLoading={isLoading}
          refetch={refetch}
        />
      </div>

    </motion.div>
  )
}

export default ShopDetailsWrapper