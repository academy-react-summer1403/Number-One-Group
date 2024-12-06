import { Link } from "react-router-dom"
import CenterBox from "./CenterBox"
import DownBox from "./DownBox"
import { Skeleton } from "@nextui-org/react"
import { ImageFallBack } from "../../common"
import fallback from "../../../assets/images/blogs.png"
import Tilt from 'react-parallax-tilt';

const BlogCard = ({ item, loading, refetch, inSlider = false }) => {
    const {
        id,
        title,
        currentImageAddressTumb: images,
        newsCatregoryName: category,
        updateDate: date,
        currentView: view,
        miniDescribe: bio,
        currentLikeCount,
        currentDissLikeCount,
        likeId,
        currentUserIsLike: likeStatus,
        currentUserIsDissLike: disLikeStatus,
    } = item;
    return (
        <Tilt transitionSpeed={2500}>
            <div data-aos="fade-up" style={{ width: !inSlider && "300px" }} className="border border-LightGrayish p-5 grid-item rounded-lg hover:shadow-lg duration-200 relative m-auto">
                <Skeleton isLoaded={!loading} className="rounded-xl">
                    <ImageFallBack
                        alt={"Picture"}
                        src={images}
                        className="rounded-xl w-full h-[224px]"
                        fallback={fallback}
                        style={{ width: "500px" }}
                    />
                </Skeleton>
                <div className="w-full">
                    <Link to={`/BlogDetails/${id}`}>
                        <CenterBox
                            title={title}
                            category={category}
                            date={date}
                            bio={bio}
                            loading={!loading}
                        />
                    </Link >
                    <DownBox
                        like={currentLikeCount}
                        disLike={currentDissLikeCount}
                        likeId={likeId}
                        disLikeStatus={disLikeStatus}
                        likeStatus={likeStatus}
                        view={view}
                        loading={!loading}
                        refetch={refetch && refetch}
                        id={id}
                    />
                </div>
            </div>
        </Tilt>
    )
}

export default BlogCard