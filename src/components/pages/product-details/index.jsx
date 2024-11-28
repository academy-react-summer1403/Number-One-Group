import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { BreadCrumb, TitleSection } from "../../partials/title-section"
import { useQueryWithDependencies } from "../../../core/hooks/react-query"
import { GetProductDetails } from "../../../core/services/api/get-data"
import RelatedProducts from "./RelatedProducts"
import Details from "./Details"
import TabSection from "./TabSection"
import PictureSection from "./PictureSection"
import configVariants from "../../../config/page-transition";
import { motion } from "framer-motion";

const ProductDetailsWrapper = () => {
    const { id } = useParams()
    const [activePic, setActivePic] = useState()
    const [pics, setPics] = useState([])

    // Get Product Details
    const { data, isSuccess } =
        useQueryWithDependencies("GET_PRODUCT_DETAILS", GetProductDetails, id, id)

    // Get Pictures
    useEffect(() => {
        if (isSuccess) {
            setPics(data.pictureList?.filter(item => item.isActive))
        }
    }, [isSuccess])

    // Set active picture
    useEffect(() => {
        if (pics?.length > 0) {
            setActivePic(pics[0])
        }
    }, [pics])

    return (
        <motion.div
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <TitleSection title={data?.title} >
                <BreadCrumb href={'/products'} text="ProductSection" />
                <BreadCrumb type="Div" text={data?.title} />
            </TitleSection>
            <div className="lg:px-44 sm:px-16 px-8 w-full flex flex-wrap gap-y-20 my-20">
                <div className="w-full flex xl:flex-nowrap flex-wrap gap-8">
                    <PictureSection
                        activePic={activePic}
                        setActivePic={setActivePic}
                        img={data?.pictureList}
                    />
                    <Details item={isSuccess && data} />
                </div>
                <TabSection bio={data?.discribe} />
                <RelatedProducts category={data?.categoryId} id={data?.id} />
            </div>
        </motion.div>
    )
}

export default ProductDetailsWrapper