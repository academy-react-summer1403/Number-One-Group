import React from 'react'
import { useParams } from 'react-router-dom';
import TitleSection from '../../components/partials/title-section/TitleSection';
import { useMutationWithoutRefetch, useQueryWithDependencies } from '../../core/hooks/react-query';
import { GetCourseDetails } from '../../core/services/api/get-data';
import { BreadCrumb } from '../../components/partials/title-section';
import MediaQuery from 'react-responsive';
import { DetailsBox, Title_details } from '../../components/common/details-pages';
import { AddCourseReserve } from '../../core/services/api/post-data';
import { LevelIcon } from '../../core/icon';
import { FaHourglassStart, FaUsers } from "react-icons/fa6";
import { SiStatuspage } from "react-icons/si";
import { FaRegIdCard } from "react-icons/fa";
import ChangeMoment from '../../core/utility/moment/ChangeMoment';
import { ImageFallBack } from '../../components/common';
import NotFoundImg from "../../assets/images/image-not-found.png"


const CourseDetails = () => {
    const { id } = useParams();
    const { data: courseData, isSuccess, refetch } = useQueryWithDependencies('GET_COURSE_DETAILS', GetCourseDetails, null, id)

    const {
        courseId, title, imageAddress, cost, isCourseReseve, courseLevelName, startTime, endTime, capacity, currentRegistrants,
        courseStatusName, teacherName, currentRate, techs

    } = isSuccess && courseData
    // details Box data
    const startT = ChangeMoment(startTime?.split("T"));
    const endT = ChangeMoment(endTime?.split("T"));
    const DetailsCourse = [
        { titleDetail: "level", countDetail: courseLevelName, iconDetail: <LevelIcon /> },
        { titleDetail: "startTime", countDetail: endT, iconDetail: <FaHourglassStart color="gray" /> },
        { titleDetail: "endTime", countDetail: startT, iconDetail: <FaHourglassStart className="rotate-180" color="gray" /> },
        { titleDetail: "capacity", countDetail: capacity, iconDetail: <FaUsers color="gray" /> },
        { titleDetail: "Registrants", countDetail: currentRegistrants, iconDetail: <FaRegIdCard color="gray" /> },
        { titleDetail: "statusCourse", countDetail: courseStatusName, iconDetail: <SiStatuspage color="gray" /> }
    ]

    // Add Course Reserve in The Basket 
    const { mutate: reserveMutate } = useMutationWithoutRefetch("ADD_COURSE_RESERVE", AddCourseReserve, courseId);

    /* PARAMS */
    // Details Params
    const detailsParams = {
        variant: "course-detail", price: cost, Detail: DetailsCourse, arrowColor: "#000",
        colorButton: "yellow", btnText: "AddToCart", actionReserve: reserveMutate, reserveStatus: isCourseReseve
    }
    // Title Details Params
    const titleDetailsParams = {
        title: title, creator: teacherName, NumberStudents: currentRegistrants, Score: currentRate,
        category: techs, differentDetail: startT, variant: "course-detail",
    }


    return (
        <>
            <TitleSection title={title}>
                <BreadCrumb href={'/courses'} text={'CoursesTitle'} />
                <BreadCrumb type="Div" text={title} />
            </TitleSection>
            <div className="main-container lg:flex flex-row-reverse gap-6 px-1">
                <div className="lg:w-3/4  mx-auto sm:w-full">
                    <ImageFallBack
                        src={imageAddress}
                        alt={'Course_Pic'}
                        fallback={NotFoundImg}
                        className='w-full h-96 rounded-xl'
                    />
                    <Title_details
                        {...titleDetailsParams}
                    />
                </div>
                <MediaQuery minWidth={'1024px'}>
                    <DetailsBox {...detailsParams} />
                </MediaQuery>
            </div>

        </>
    )
}

export default CourseDetails