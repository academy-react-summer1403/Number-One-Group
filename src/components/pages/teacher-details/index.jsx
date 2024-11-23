import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { TitleSection, BreadCrumb } from "../../partials/title-section"
import { useQueryWithDependencies } from '../../../core/hooks/react-query'
import { GetTeacherDetails } from '../../../core/services/api/get-data'
import ContactToTeacher from './ContactToTeacher'
import TeacherCard from './TeacherCard'
import TeacherCourse from './TeacherCourse'
import configVariants from '../../../config/page-transition'
import { motion } from 'framer-motion'

const TeacherDetailsWrapper = () => {
    const { id } = useParams()

    const { data } = useQueryWithDependencies("GET_TEACHER_DETAILS", GetTeacherDetails, id, id)

    const fullName = data?.fullName ? data?.fullName : "بی نام"
    console.log(data)

    return (
        <motion.div
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <TitleSection title={fullName} >
                <BreadCrumb href={'/teachers'} text="InstructorsSection" />
                <BreadCrumb type="Div" text={fullName} />
            </TitleSection>
            <div className='lg:px-44 sm:px-16 px-8 w-full flex flex-wrap xl:flex-nowrap gap-x-10 my-20'>
                <ContactToTeacher teacherId={id} />
                <div className='xl:w-3/4 h-fit flex flex-wrap gap-y-6'>
                    <TeacherCard
                        courseCount={data?.courseCount}
                        newsCount={data?.newsCount}
                        fullName={fullName}
                        image={data?.pictureAddress}
                    />
                    <TeacherCourse id={id} />
                </div>
            </div>
        </motion.div>
    )
}

export default TeacherDetailsWrapper