import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { VsIcon } from "../../../core/icon"
import { useQueryWithDependencies } from "../../../core/hooks/react-query"
import { GetAllCourseByPagination } from "../../../core/services/api/get-data"
import HeadingSection from "./HeadingSection"
import ItemsCompared from "./ItemsCompared"
import { BreadCrumb, TitleSection } from "../../partials/title-section"
import { useDispatch, useSelector } from "react-redux"
import { setComparisonIds } from "../../../redux/slices/filter-box-slices/FilterCourses"
import ChangeMoment from "../../../core/utility/moment"
import comparisonPic from '../../../assets/images/vs.png'
import { CustomButton } from "../../common"


const ComparisonPage = () => {
  const selectedIds = useSelector(state => state.FilterCourses.comparisonIds)
  const [searchParams, setSearchParams] = useSearchParams();
  const Dispatch = useDispatch()
  const [objects, setObjects] = useState([]);
  const navigate = useNavigate()

  // Getting data from Api with use Query
  const { data: coursesData, isSuccess } = useQueryWithDependencies("GET_COURSES", GetAllCourseByPagination, null, { PageNumber: 1, RowsOfPage: 1000 });

  // Converting the IDs in the form Array and Set to state
  const SetArray = () => {
    var CoursesFiltered = [];

    for (let Id of selectedIds) {
      CoursesFiltered.push(
        coursesData?.courseFilterDtos?.find(el => el.courseId == Id)
      )
    }
    // console.log(CoursesFiltered)
    if (CoursesFiltered.length <= 2) {
      setObjects(CoursesFiltered)
    } else navigate("/*")
  }
  useEffect(() => {
    if (isSuccess) {
      SetArray();
    }
  }, [isSuccess])

  useEffect(() => {
    // console.log(selectedIds)
    if (selectedIds.length != 0) {
      searchParams.set("Ids", selectedIds);
      setSearchParams(searchParams);
    }
    const value = searchParams.get("Ids");
    if (value === null) navigate("/*")
    Dispatch(setComparisonIds(value.split(",")))
  }, [])

  return (
    <>
      <TitleSection title={'comparisonTitle'}>
        <BreadCrumb href={'/courses'} text={'CoursesTitle'} />
        <BreadCrumb type="Div" text={'comparisonTitle'} />
      </TitleSection>
      {/* <HeadingSection /> */}
      {/* <div className="w-full flex justify-center">
        <img src={comparisonPic} className="h-72 mb-[-200px]" />
      </div> */}
      <div className="w-full md:mb-20 mt-52 xl:px-44 sm:px-16 px-8 flex gap-y-36 max-lg:flex-wrap items-center justify-between max-lg:justify-center relative">
        {objects && objects.length != 0 && objects.map((item) => {
          return (
            <ItemsCompared
              key={item.id}
              id={item.courseId}
              images={item.tumbImageAddress}
              title={item.title}
              score={item.courseRate}
              technology={item.technologyList}
              level={item.levelName}
              status={item.statusName}
              instructor={item.teacherName}
              date={ChangeMoment(item.lastUpdate, "YYYY/MM/DD", "persian")}
              students={item.currentRegistrants}
              likeCount={item.likeCount}
              disLikeCount={item.dissLikeCount}
              price={item.cost}
            />
          )
        })}
      </div>
      <div className="w-full flex justify-center mb-20">
        <CustomButton vStyle={"purple"} vType={"link"} href={"/courses"} text={"به صفحه دوره ها بروید"} arrowColor={"#fff"} />
      </div>
    </>
  )
}

export default ComparisonPage