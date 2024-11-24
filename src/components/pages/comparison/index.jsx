import { useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { VsIcon } from "../../../core/icon"
// import BreadCrumb, { TitleSection } from "../../partials/title-section"
import { useQueryWithDependencies } from "../../../core/hooks/react-query"
import { GetAllCourseByPagination } from "../../../core/services/api/get-data"
import HeadingSection from "./HeadingSection"
import ItemsCompared from "./ItemsCompared"
import { BreadCrumb } from "../../partials/title-section"

const ComparisonPage = () => {

  // Getting data from Api with use Query
  const { data: coursesData, isSuccess, isError, isLoading, refetch } = useQueryWithDependencies("GET_COURSES", GetAllCourseByPagination, null, { PageNumber: 1, RowsOfPage: 1000 });

  const location = useLocation();
  const [objects, setObjects] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    SetArray();

  }, [location.pathname])

  // Converting the IDs in the form Array and Set to state
  const SetArray = () => {
    const getId = location.pathname.split("/")[2]
    const ArrayId = getId.split(",");

    var CoursesFiltered = [];
    for (let Id of ArrayId) {
      CoursesFiltered.push(
        coursesData?.find(el => el.id === Id)
      )
    }
    if (CoursesFiltered.flat(Infinity).length <= 2) {
      setObjects(CoursesFiltered.flat(Infinity))
    } else navigate("/*")
  }

  return (
    <>
      <TitleSection title={'comparisonTitle'}>
        <BreadCrumb href={'/courses'} text={'CoursesTitle'} />
        <BreadCrumb type="Div" text={'comparisonTitle'} />
      </TitleSection>
      <HeadingSection />
      <div className="md:mb-20 mt-52 sm:mx-4 md:flex gap-28 justify-evenly">
        <div className="h-fit w-fit absolute md:block hidden lg:mx-0 -mt-16">
          <VsIcon />
        </div>
        {objects.map((item) => {
          return (
            <ItemsCompared
              key={item.id}
              // images={item.img}
              // title={item.title}
              // score={item.score}
              // level={item.level}
              // date={item.date}
              // lessons={item.lessons}
              // quizzes={item.quizzes}
              // duration={item.duration}
              // certifications={item.certifications}
              // students={item.students}
              // instructor={item.instructor}
              // price={item.price}
            />
          )
        })}
      </div>
    </>
  )
}

export default ComparisonPage