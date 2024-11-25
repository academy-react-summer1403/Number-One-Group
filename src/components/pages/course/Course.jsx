import { Link, useSearchParams } from "react-router-dom"
import { ComparisonBtn, FavoriteBtn, ImageFallBack } from "../../common"
import CourseCenterBody from "./CourseCenterBody"
import CourseDownBody from "./CourseDownBody"
import CourseTopBody from "./CourseTopBody"
import { Skeleton } from "@nextui-org/react";
import NotFoundImg from "../../../assets/images/image-not-found.png"
import { useMediaQuery } from "react-responsive"
import Tilt from 'react-parallax-tilt';

const CourseCard = ({ loading, refetch, item }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const isTabletOrLapTop = useMediaQuery({ query: '(min-width: 768px)' })
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
        describe: bio,
        userFavorite,
        userFavoriteId,
    } = item;

    return (
        <Tilt transitionSpeed={2500}>
            <div data-aos="fade-up" className="border border-LightGrayish p-4 pb-3 grid-item w-[300px] h-[435px] rounded-lg hover:shadow-lg duration-200  m-auto relative  group/item">
                <div className="w-full h-44 course-height-img mx-auto rounded-lg">
                    <Link to={`/CourseDetails/${id}`}>
                        <Skeleton isLoaded={!loading} className="h-44 rounded-lg">
                            <ImageFallBack
                                src={images}
                                alt={'coursePicture'}
                                fallback={NotFoundImg}
                                className={`w-full shadow-xl rounded-md ${searchParams.get('V') == 2 && isTabletOrLapTop ? 'h-[227px]' : 'h-44'}`}
                            />
                        </Skeleton>
                    </Link >
                    <div className="flex justify-center gap-8 my-3">
                        <ComparisonBtn isLoading={loading} CourseId={id} />
                        <FavoriteBtn isLoading={loading}
                            variantStyle={"card"}
                            variantApi={'courseDetails'}
                            Id={id}
                            userFavorite={userFavorite}
                            favoriteId={userFavoriteId}
                            refetch={refetch}
                        />
                    </div>
                </div>
                <div to={`/CourseDetails/${id}`} className="py-2 course-body w-full ">
                    <Link to={`/CourseDetails/${id}`}>
                        <CourseTopBody
                            title={title}
                            score={score}
                            category={category}
                            bio={bio}
                            isLoaded={loading}
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
                        isLoaded={loading}
                        refetch={refetch && refetch}
                    />
                    <CourseDownBody
                        price={price}
                        date={date}
                        isLoaded={loading}
                    />
                </div >
            </div>
        </Tilt>
    )
}

export default CourseCard