import { useParams } from 'react-router-dom';
import { useMutationWithoutRefetch, useQueryWithDependencies, useQueryWithoutDependencies } from '../../../core/hooks/react-query';
import { GetAllCourseByPagination, GetCourseDetails, GetCoursesComments, GetReplayCourseComment, GetTechnologies } from '../../../core/services/api/get-data';
import { BreadCrumb, TitleSection } from '../../partials/title-section';
import MediaQuery from 'react-responsive';
import { AddCourseRate, AddCourseReserve } from '../../../core/services/api/post-data';
import { LevelIcon } from '../../../core/icon';
import { FaHourglassStart, FaUsers } from "react-icons/fa6";
import { SiStatuspage } from "react-icons/si";
import { FaRegIdCard } from "react-icons/fa";
import ChangeMoment from '../../../core/utility/moment';
import { DetailsBox, ImageFallBack, RelatedItems, Title_details } from '../../common';
import NotFoundImg from "../../../assets/images/courses.png"
import TabPanel from '../../pages/course-detail/TabPanel';
import CourseCard from '../../pages/course/Course';
import { useTranslation } from 'react-i18next';
import { MajorElements } from '../../../core/constants/test-text/MajorElements';
import { motion } from 'framer-motion';
import configVariants from '../../../config/page-transition';

const CourseDetailsWrapperPage = () => {
    const { i18n } = useTranslation()
    const { id } = useParams();
    const { data: courseData, isSuccess, refetch } = useQueryWithDependencies('GET_COURSE_DETAILS', GetCourseDetails, null, id)
    const {
        courseId, title, imageAddress, cost, isCourseReseve, courseLevelName, startTime, endTime, capacity, currentRegistrants,
        courseStatusName, teacherName, currentRate, techs, describe, miniDescribe, userLikeId, currentUserSetRate,
        likeCount, dissLikeCount, currentUserLike, currentUserDissLike, userFavoriteId, isUserFavorite, courseRate

    } = isSuccess && courseData
    // details Box data
    const startT = ChangeMoment(startTime, "YYYY/MM/DD", "persian");
    const endT = ChangeMoment(endTime, "YYYY/MM/DD", "persian");
    const DetailsCourse = [
        { titleDetail: "level", countDetail: courseLevelName, iconDetail: <LevelIcon /> },
        { titleDetail: "startTime", countDetail: endT, iconDetail: <FaHourglassStart color="gray" /> },
        { titleDetail: "endTime", countDetail: startT, iconDetail: <FaHourglassStart className="rotate-180" color="gray" /> },
        { titleDetail: "capacity", countDetail: capacity, iconDetail: <FaUsers color="gray" /> },
        { titleDetail: "Registrants", countDetail: currentRegistrants, iconDetail: <FaRegIdCard color="gray" /> },
        { titleDetail: "statusCourse", countDetail: courseStatusName, iconDetail: <SiStatuspage color="gray" /> }
    ]

    // Add Course Reserve in The Basket 
    const { mutate: reserveMutate } = useMutationWithoutRefetch("ADD_COURSE_RESERVE", AddCourseReserve);

    // Comment call api with react Query
    const { data: commentData, isSuccess: commentSuccess, refetch: refetchComment } = useQueryWithDependencies('GET_COMMENTS_COURSE', GetCoursesComments, null, id)

    // Getting technologiesData from api
    const { data: teachData } = useQueryWithoutDependencies('GET_TECHNOLOGIES', GetTechnologies)

    /* PARAMS */
    // Details Params
    const detailsParams = {
        variant: "course-detail", price: cost, Detail: DetailsCourse, arrowColor: "#000", id: id,shareText:"ShareCourse",
        colorButton: "yellow", btnText: "AddToCart", actionReserve: reserveMutate, reserveStatus: isCourseReseve
    }
    // Title Details Params
    const titleDetailsParams = {
        title: title, creator: teacherName, NumberStudents: currentRegistrants, Score: currentRate,
        category: techs, differentDetail: startT, variant: "course-detail",
    }
    // to like params
    const Params = {
        variant: 'courseDetails', userLikeId: userLikeId, likeNumber: likeCount, disLikeNumber: dissLikeCount,
        LikeStatus: currentUserLike, DissLikeStatus: currentUserDissLike, Id: id, favoriteId: userFavoriteId,
        refetch: refetch, userFavorite: isUserFavorite,
        favoriteText: 'CourseFavorite', refetchComment: refetchComment, commentSuccess: commentSuccess,
        commentData: commentData, actionRate: AddCourseRate, rateStatus: currentUserSetRate, rateNumber: currentRate,
        Id: id,
    }
    // Find related courses based on technology
    const listTech = [];
    if (techs) {
        for (const element of techs) {
            const teachObj = teachData?.find(tech => tech.techName == element);
            listTech.push(teachObj?.id);
        }
    }

    return (
        <motion.div
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <TitleSection title={title}>
                <BreadCrumb href={'/courses'} text={'CoursesTitle'} />
                <BreadCrumb type="Div" text={title} />
            </TitleSection>
            <div className="main-container lg:flex flex-row-reverse gap-6 px-1">
                <div data-aos={`fade-${i18n.language === 'fa' ? 'right' : 'left'}`} data-aos-duration="700"
                    className="lg:w-3/4  mx-auto sm:w-full">
                    <ImageFallBack
                        src={imageAddress}
                        alt={'Course_Pic'}
                        fallback={NotFoundImg}
                        className='w-full h-96 rounded-xl'
                    />
                    <Title_details
                        {...titleDetailsParams}
                    />
                    <MediaQuery maxWidth={'1024px'}>
                        <DetailsBox {...detailsParams} />
                    </MediaQuery>
                    <TabPanel
                        overView={describe}
                        training={miniDescribe}
                        MajorElements={MajorElements}
                        variant={'courseComment'}
                        getReplay={GetReplayCourseComment}
                        params={Params}
                    />
                    <RelatedItems
                        category={techs}
                        params={listTech?.length > 0 && { TechCount: 1, ListTech: listTech.toString() }}
                        apiFunction={GetAllCourseByPagination}
                        variant={'courseFilterDtos'}
                        RenderItem={CourseCard}
                    />
                </div>
                <MediaQuery minWidth={'1024px'}>
                    <DetailsBox {...detailsParams} />
                </MediaQuery>
            </div>

        </motion.div>
    )
}
export default CourseDetailsWrapperPage