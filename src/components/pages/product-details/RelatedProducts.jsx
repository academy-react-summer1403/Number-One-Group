import { useTranslation } from 'react-i18next'
import { SwiperSlider } from '../../common'
import { SwiperSlide } from 'swiper/react'
import ProductCardWrapper from '../product/ProductCardWrapper'
import { useQueryWithoutDependencies } from '../../../core/hooks/react-query'
import { GetAllProducts } from '../../../core/services/api/get-data'
import { useEffect, useState } from 'react'

const RelatedProducts = ({ category, id }) => {
    const { t, i18n } = useTranslation()
    const [filteredData, setFilteredData] = useState([])

    const { data, isSuccess } = useQueryWithoutDependencies(
        "GET_RELATED_PRODUCTS",
        GetAllProducts
    )

    useEffect(() => {
        if (isSuccess) {
            setFilteredData(data.filter(item => item.categoryId === category && item.id != id))
        }
    }, [isSuccess])

    return (
        <div className="w-full flex flex-wrap gap-y-8">
            <div className="w-full flex flex-wrap gap-y-5 relative">
                <div className='w-full flex items-center gap-x-3'>
                    <div className='importantWord py-1.5'>{t("products")}</div>
                    <h1 className="boldStyle_text">{t("related")}</h1>
                </div>
                {filteredData.length > 0 ? (
                    <SwiperSlider
                        perView={3}
                        arrowColor="#fff"
                        buttonSideLeft={`top-3 h-10 w-10 ${i18n.language === 'fa' ? "left-0" : "right-12"} `}
                        buttonSideRight={`top-3 h-10 w-10 ${i18n.language === 'fa' ? "left-12" : "right-0"} `}
                        buttonColor="bg-VioletBlue"
                        className="w-full"
                    >
                        {data.filter(item => item.categoryId === category && item.id != id)?.
                            map((item, index) => (
                                <SwiperSlide key={index}>
                                    <ProductCardWrapper item={item} />
                                </SwiperSlide>
                            ))}
                    </SwiperSlider>
                ) : (
                    <span className='my-20 mediumStyle_text w-full text-center'>محصولی وجود ندارد</span>
                )}
            </div>
        </div>
    )
}

export default RelatedProducts
