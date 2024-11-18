import { TeacherCard } from '../../../components/common'

const CreateTeacher = ({ data, itemOffset, endOffset }) => {
    return (
        <div className="lg:px-44 sm:px-16 px-8 w-full flex justify-evenly gap-x-12 gap-y-8 flex-wrap my-20">
            {data.slice(itemOffset, endOffset).map((item, index) => (
                <TeacherCard
                    key={index}
                    name={item.fullName ? item.fullName : "بی نام"}
                    picture={item.pictureAddress}
                    href={`/instructorsDetails/${item.teacherId}`}
                />
            ))}
        </div>
    )
}

export default CreateTeacher
