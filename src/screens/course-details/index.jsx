import React from 'react'
import { useParams } from 'react-router-dom';
import TitleSection from '../../components/partials/title-section/TitleSection';
import { useQueryWithDependencies } from '../../core/hooks/react-query';
import { GetCourseDetails } from '../../core/services/api/get-data';
import { BreadCrumb } from '../../components/partials/title-section';

const CourseDetails = () => {
    const { id } = useParams();
    const { data: courseData, isSuccess, refetch } = useQueryWithDependencies('GET_COURSE_DETAILS', GetCourseDetails, null, id)

    const {
        courseId, title

    } = isSuccess && courseData

    return (
        <>
            <TitleSection title={title}>
                <BreadCrumb href={'/courses'} text={'CoursesTitle'} />
                <BreadCrumb type="Div" text={title} />
            </TitleSection>
        </>
    )
}

export default CourseDetails