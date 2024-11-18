import { useQueryWithoutDependencies } from "../../../core/hooks/react-query";
import { useState } from 'react'
import { BreadCrumb, TitleSection } from '../../../components/partials/title-section'
import { PaginatedItems, PaginateHolderItems } from '../../../components/common'
import { GetAllTeachers } from '../../../core/services/api/get-data'
import CreateTeacher from "./CreateTeacher";
import { motion } from "framer-motion";
import configVariants from "../../../config/page-transition";

const TeacherWrapper = () => {
    const { data, isSuccess } = useQueryWithoutDependencies("GET_TEACHERS", GetAllTeachers)

    // Pagination
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 9;

    return (
        <motion.div
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <TitleSection title={'instructorsTitle'} >
                <BreadCrumb type="Div" text={'instructorsTitle'} />
            </TitleSection>
            <PaginateHolderItems style="justify-center">
                <PaginatedItems currentData={data?.length} currentDataInOnePage={9} setState={setItemOffset} >
                    <CreateTeacher
                        data={isSuccess ? data : []}
                        itemOffset={itemOffset}
                        endOffset={endOffset}
                    />
                </PaginatedItems>
            </PaginateHolderItems>
        </motion.div>
    )
}

export default TeacherWrapper
