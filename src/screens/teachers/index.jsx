import React, { Fragment, useState } from 'react'
import { BreadCrumb, TitleSection } from '../../components/partials/title-section'
import { PaginatedItems, PaginateHolderItems, TeacherCard } from '../../components/common'
import { useQuery } from '@tanstack/react-query'
import { GetAllTeachers } from '../../core/services/api/get-data'

const TeacherPage = () => {
    const { data, isSuccess } = useQuery({
        queryKey: ["GET_TEACHERS"],
        queryFn: GetAllTeachers
    })

    console.log(data)
    // Pagination
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 9;

    return (
        <Fragment>
            <TitleSection title={'instructorsTitle'} >
                <BreadCrumb type="Div" text={'instructorsTitle'} />
            </TitleSection>
            <PaginateHolderItems style="justify-center">
                <PaginatedItems currentData={data?.length} currentDataInOnePage={9} setState={setItemOffset} >
                    <div className="lg:px-44 sm:px-16 px-8 w-full flex justify-evenly gap-x-12 gap-y-8 flex-wrap my-20">
                        {isSuccess && data?.slice(itemOffset, endOffset).map((item, index) => (
                            <TeacherCard
                                key={index}
                                name={item.fullName ? item.fullName : "بی نام"}
                                picture={item.pictureAddress}
                                href={`/instructorsDetails/${item.teacherId}`}
                            />
                        ))}
                    </div>
                </PaginatedItems>
            </PaginateHolderItems>

        </Fragment>
    )
}

export default TeacherPage
