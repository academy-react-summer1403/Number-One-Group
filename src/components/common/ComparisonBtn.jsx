import { useMediaQuery } from "react-responsive"
import { ComparisonIcon } from "../../core/icon"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import tooltipStyle from "../../core/constants/tooltip-style"
import { Skeleton, Tooltip } from "@nextui-org/react"
import { useTranslation } from "react-i18next"
import { setComparisonIds } from "../../redux/slices/filter-box-slices/FilterCourses"
import { useDispatch, useSelector } from "react-redux"

const ComparisonBtn = ({ isLoading, CourseId }) => {
  const { i18n } = useTranslation()
  const Dispatch = useDispatch()
  const comparisonIds = useSelector(state => state.FilterCourses.comparisonIds)
  const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })
  const [selectBtn, setSelectBtn] = useState(false)
  const navigate = useNavigate()

  // Getting the ideas of the compared items
  const getId = (id) => {
    if (!selectBtn) {
      let ComparisonId = [...comparisonIds, id]
      Dispatch(setComparisonIds(ComparisonId));
    }
    else Dispatch(setComparisonIds([]))
  }
  useEffect(() => {
    Dispatch(setComparisonIds([]))
  }, [])

  // Go to the comparison page after receiving the two selected IDs
  useEffect(() => {
    if (comparisonIds.length != 0) {
      if (comparisonIds.length < 2) return
      if (selectBtn) {
        navigate(`/Comparison`)
      }
    }
  }, [comparisonIds])


  return (
    <Tooltip {...tooltipStyle} content={i18n.language == "en" ? "Comparison" : "مقایسه"}>
      <Skeleton isLoaded={!isLoading} className={`rounded-lg absolute ${location.search === '?V=2' && isTabletOrLapTop ? "top-4 left-16" : "top-6 left-6 "} `}>
        <div onClick={() => { { getId(CourseId && CourseId); setSelectBtn(!selectBtn); } }} className={`${selectBtn ? "bg-SunshineYellow" : "bg-LightLavender"} w-[35px] h-[35px] flex justify-center items-center cursor-pointer  rounded-xl  comparison-btn`}>
          <ComparisonIcon width="25px" height="25px" className="stroke-[#555555] dark:stroke-[#fff]" />
        </div>
      </Skeleton>
    </Tooltip>
  )
}

export default ComparisonBtn