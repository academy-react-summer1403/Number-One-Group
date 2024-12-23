import { Accordion, AccordionItem, Radio, RadioGroup } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const FilterRadio = ({
  title,
  setInputID,
  inputData,
  refetch,
  fetchStatus,
  titleKey,
}) => {
  const { t } = useTranslation();
  const [checkedData, SetCheckedData] = useState(false);
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams();

  const [selected, setSelected] = useState('')

  const handleChange = (item) => {
    dispatch(setInputID(item.id == undefined ? item.teacherId : item.id))
    searchParams.set(title, item.id == undefined ? item.teacherId : item.id)
    SetCheckedData(true);
    setSearchParams(searchParams)
  }

  useEffect(() => {
    if (fetchStatus) {
      setSelected("")
    }
  }, [fetchStatus])

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
              dispatch(setInputID(""));
              searchParams.delete(title)
              SetCheckedData(false);
              refetch();
              setSearchParams(searchParams)
            }}
          >
            {t('removeFilters')}
          </button>
        </div>
        <RadioGroup
          value={selected}
          onValueChange={setSelected}
          aria-level="radio-group"
        >
          {inputData && inputData.map((item, index) => (
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: -10 }}
              className="h-6"
              key={index}
            >
              <Radio
                key={index}
                onChange={() => { handleChange(item); }}
                value={title + index}
                classNames={{
                  base: "w-full",
                  label: "text-GrayishPurple lg:text-base text-lg line-clamp-1",
                  wrapper: "w-4 h-4"
                }}
              >
                {item?.[titleKey]}
              </Radio>
            </motion.div>
          ))}
        </RadioGroup>
      </AccordionItem>
    </Accordion>
  )
}

export default FilterRadio
