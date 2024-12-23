import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Accordion, AccordionItem, Checkbox, CheckboxGroup } from "@nextui-org/react";
import { motion } from "framer-motion";

const FilterCheckBox = ({
  title,
  labelArray,
  SetFilteredData,
  setTechCount,
  refetch,
  isRefetching,
  titleKey
}) => {
  const { t } = useTranslation();
  const Dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [checkedData, SetCheckedData] = useState(false);
  const [selected, setSelected] = useState([])

  // Checkbox filtering function
  const selectBtn = (e, item) => {
    item.id.toString();
    if (e.target.checked) {
      item.active = true
      SetCheckedData(true);
    }
    else {
      item.active = false
    }
    let activeButton = labelArray.filter(Btn => Btn.active === true)
    let ButtonId = [...new Set(activeButton.map((Btn) => Btn.id))]
    console.log(ButtonId)


    if (activeButton.length === 0) {
      searchParams.delete("ListTech")
      searchParams.delete("TechCount")
      Dispatch(SetFilteredData(null))
      Dispatch(setTechCount(null))
      SetCheckedData(false);
      setSearchParams(searchParams);
    }
    else {
      searchParams.set("TechCount", 1)
      searchParams.set("ListTech", ButtonId.toString())
      Dispatch(SetFilteredData(ButtonId.toString()));
      Dispatch(setTechCount(1));
      setSearchParams(searchParams);
    }
  }

  useEffect(() => {
    if (isRefetching) {
      setSelected([])
    }
  }, [isRefetching])
  const itemClasses = {
    title: "font-normal text-medium  px-0",
    trigger: " h-1",
  };

  return (
    <Accordion  fullWidth dividerProps={true} showDivider={false} itemClasses={itemClasses}>
      <AccordionItem title={t(title)} className='w-full filter-box max-l'>
        <div className="float-end">
          {/* Remove Filter Button */}
          <button
            className={`bg-gray-200  p-1 text-xs rounded-xl text-red-500 hover:bg-gray-300 duration-100
             ${checkedData === false ? "hidden" : ""}`
            }
            onClick={() => {
              Dispatch(SetFilteredData(null))
              SetCheckedData(false);
              Dispatch(setTechCount(null))
              searchParams.delete("ListTech")
              searchParams.delete("TechCount")
              setSearchParams(searchParams);
              refetch()
            }}
          >
            {t('removeFilters')}

          </button>
        </div>
        <CheckboxGroup
          value={selected}
          onValueChange={setSelected}
          aria-label="checkbox-group"
        >
          {labelArray && labelArray.map((item, index) => (
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: -10 }}
              className="h-6"
            >
              <Checkbox
                key={index}
                value={title + index}
                onChange={(e) => selectBtn(e, item)}
                classNames={{
                  base: "w-full",
                  label: "text-GrayishPurple lg:text-base text-lg",
                  wrapper: "w-4 h-4"
                }}
                radius="sm"
              >
                {item?.[titleKey]}
              </Checkbox>
            </motion.div>
          ))}
        </CheckboxGroup>
      </AccordionItem>
    </Accordion>
  )
}

export default FilterCheckBox