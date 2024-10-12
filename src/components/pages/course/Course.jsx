import { Link } from "react-router-dom"
import { FavoriteBtn, ImageFallBack } from "../../common"
import CourseCenterBody from "./CourseCenterBody"
import CourseDownBody from "./CourseDownBody"
import CourseTopBody from "./CourseTopBody"
import { Skeleton } from "@nextui-org/react";
import NotFoundImg from "../../../assets/images/image-not-found.png"

const Course = ({ isLoading, refetch, item }) => {
    const {
        courseId: id,
        title,
        tumbImageAddress: images,
        teacherName: instructor,
        courseRate: score,
        technologyList: category,
        levelName: level,
        cost: price,
        lastUpdate: date,
        commandCount: studentsNumber,
        userLikedId: userLikeId,
        likeCount: like,
        dissLikeCount: disLike,
        userIsLiked: LikeStatus,
        currentUserDissLike: DissLikeStatus,
        describe: bio
    } = item;
    // console.log(images)
    return (
        <>
            <div className="border border-LightGrayish p-4 pb-3 grid-item w-[300px] h-[435px] rounded-lg hover:shadow-lg duration-200  m-auto relative  group/item">
                <div className="w-full h-44 course-height-img mx-auto  rounded-lg">
                    {/* course Images */}
                    <Link to={`/CourseDetails/${id}`}>
                        <Skeleton isLoaded={!isLoading} className="h-44 rounded-lg">
                            <ImageFallBack
                                src={images}
                                alt={'coursePicture'}
                                fallback={NotFoundImg}
                                className={'w-full h-44 shadow-xl rounded-md'}
                            />
                        </Skeleton>
                    </Link >

                    <div className="flex justify-center gap-8 my-3">
                        <FavoriteBtn isLoading={isLoading} variantStyle="card" />
                    </div>
                </div>
                <div to={`/CourseDetails/${id}`} className="py-2 course-body w-full ">
                    <Link to={`/CourseDetails/${id}`}>
                        <CourseTopBody
                            title={title}
                            score={score}
                            category={category}
                            bio={bio}
                            isLoaded={isLoading}
                        />
                    </Link >
                    <CourseCenterBody
                        instructor={instructor}
                        studentsNumber={studentsNumber}
                        level={level}
                        userLikeId={userLikeId}
                        like={like}
                        disLike={disLike}
                        LikeStatus={LikeStatus}
                        DissLikeStatus={DissLikeStatus}
                        Id={id}
                        isLoaded={isLoading}
                        refetch={refetch && refetch}
                    />
                    <CourseDownBody
                        price={price}
                        date={date}
                        isLoaded={isLoading}
                    />
                </div >
            </div>
        </>
    )
}

export default Course