import { Skeleton } from "@nextui-org/react"
import { LevelIcon, StudentIcon, TeacherIcon } from "../../../core/icon"
import { ToLike } from "../../common"

const CourseCenterBody = ({
    instructor,
    studentsNumber,
    level,
    userLikeId,
    like,
    disLike,
    LikeStatus,
    DissLikeStatus,
    Id,
    isLoaded,
    refetch,
}) => {
    console.log(DissLikeStatus)

    const Data = [
        { icon: <StudentIcon stroke={"gray"} />, title: studentsNumber ?? "" },
        { icon: <LevelIcon stroke={"gray"} />, title: level ?? "", justify: "justify-end" },
        { icon: <TeacherIcon stroke={"gray"} />, title: instructor ?? "" },
    ]

    return (
        <div className="grid grid-cols-2 course-centerBody gap-y-5 place-content-between justify-between">
            {Data.map((item, index) => (
                <div key={index} className="course-flexBody">
                    <Skeleton isLoaded={!isLoaded} className="rounded-lg">
                        <div className={`flex items-center gap-1 ${item.justify}`}>
                            {item.icon}
                            <p className="line-clamp-1 text-gray-500">{item.title}</p>
                        </div>
                    </Skeleton>
                </div>
            ))}
            <div className="flex items-center gap-1 justify-end">
                <Skeleton isLoaded={!isLoaded} className="rounded-lg">
                    <ToLike
                        userLikeId={userLikeId}
                        likeNumber={like}
                        disLikeNumber={disLike}
                        LikeStatus={LikeStatus}
                        DissLikeStatus={DissLikeStatus}
                        Id={Id}
                        variant={'course'}
                        refetch={refetch}
                    />
                </Skeleton>
            </div>
        </div>
    )
}

export default CourseCenterBody