import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

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


  const handleChange = (item) => {
    dispatch(setInputID(item.id == undefined ? item.teacherId : item.id))
    searchParams.set(title, item.id == undefined ? item.teacherId : item.id)
    SetCheckedData(true);
    setSearchParams(searchParams)
  }

  return (
    <div className="filter-box">
      <div className="flex justify-between">
        <h1 className="font-semibold pb-2">{t(title)}</h1>
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
      {inputData && inputData.map((item, index) => (
        <div
          onChange={() => { handleChange(item) }}
          key={index}
          className="text-sm flex items-center gap-2 mediumStyle_text w-fit cursor-pointer mt-1"
        >
          <input type="radio" checked={fetchStatus ? false : null} id={title + index} name={title}
            className="w-4 h-4 rounded-[4px] checked:bg-[url('../../../../../public/true.png')] bg-cover checked:border-none border border-gray-500 bg-white dark:bg-gray-950 appearance-none" />
          <label className="cursor-pointer line-clamp-1" htmlFor={title + index}>{item?.[titleKey]}</label>
        </div>
      ))}

    </div>
  )
}

export default FilterRadio
