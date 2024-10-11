import { PaginatedItems, PaginateHolderItems } from "../../components/common/Paginate"
import BreadCrumb from "../../components/partials/title-section/BreadCrumb"
import TitleSection from "../../components/partials/title-section/TitleSection"

const Courses = () => {
    return (
        <>
            <TitleSection title={'CoursesTitle'} >
                <BreadCrumb type="Div" text={'CoursesTitle'} />
            </TitleSection>
            <div className="main-container flex gap-7">
                <PaginateHolderItems style="justify-center">
                    <PaginatedItems>
                        <div className={`flex flex-wrap relative gap-x-1 justify-around gap-y-5 w-full m-auto my-2 `}>
                            <RenderItemsList
                                RenderComponent={''}
                                isLoading={isLoading}
                                isSuccess={isSuccess}
                                isError={isError}
                                originalData={isSuccess && coursesData?.courseFilterDtos}
                                skeletonData={skeletonData}
                                notFoundText={'course_NotFound'}
                                refetchData={refetch}
                            />
                        </div>
                    </PaginatedItems>
                </PaginateHolderItems>
            </div>
        </>
    )
}

export default Courses