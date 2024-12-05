// import { useState } from "react";
import { Slider } from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SeparationPrice } from "../../../../core/utility/SeparationPrice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const FilterRange = ({
  title,
  setPriceDown,
  setPriceUp,

}) => {
  const { t } = useTranslation();
  const Dispatch = useDispatch();
  const [value, setValue] = useState([0, 1000000000]);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleInput = (event) => {
    setValue(event)
    searchParams.set("CostDown",event[0])
    searchParams.set("CostUp",event[1])
    Dispatch(setPriceDown(event[0]))
    Dispatch(setPriceUp(event[1]))
    setSearchParams(searchParams);
  };
  return (
    <div className="filter-box relative mx-2">
      <h1 className="text-[20px] pb-2">{t(title)}</h1>
      <Slider
        aria-label="filter-rage"
        step={10}
        maxValue={1000000000}
        minValue={0}
        value={value}
        onChange={(event) => { handleInput(event) }}
        hideValue
        size="sm"
        classNames={{
          base: "max-w-md gap-3 my-5",
          filler: "bg-[#5751E1]",
          thumb: "bg-[#5751E1]",
        }}
        color="#5751E1"
      />
      {/* price information */}
      <div className=" bottom-9 right-5 text-gray-600">
        <h1 className="mediumStyle_text">{t('from')} :<span className="text-VioletBlue mx-2">{SeparationPrice(value[0])} {t('priceCount')}</span></h1>
        <h1 className="mediumStyle_text mt-2">{t('upTo')} :<span className="text-VioletBlue mx-2">{SeparationPrice(value[1])} {t('priceCount')}</span></h1>
      </div>
    </div>
  )
}

export default FilterRange