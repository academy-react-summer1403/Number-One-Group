import { Link } from "react-router-dom"
import CenterBox from "./CenterBox"
import DownBox from "./DownBox"
import { Skeleton } from "@nextui-org/react"
import { ImageFallBack } from "../../common"
import fallback from "../../../assets/images/image-not-found.png"

const BlogCard = ({ item, loading, refetch }) => {
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
        <div data-aos="fade-up" className="border border-LightGrayish p-5 grid-item w-[300px] rounded-lg hover:shadow-lg duration-200 relative m-auto">
            <Skeleton isLoaded={!loading} className="rounded-xl">
                <ImageFallBack
                    alt={"Picture"}
                    src={images}
                    className="rounded-xl max-w-[258px] min-w-[258px] h-[224px]"
                    fallback={fallback}
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
    )
}

export default BlogCard