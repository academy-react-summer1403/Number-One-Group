import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BreadCrumb, TitleSection } from "../../partials/title-section";
import { useQueryWithDependencies } from "../../../core/hooks/react-query";
import { GetBlogsComments, GetBlogWithId, GetNewsFilterPage, GetReplayBlogComment } from "../../../core/services/api/get-data";
import { CommentSection, FeedbackSection, ImageFallBack, OverView_Details, RelatedItems } from "../../common";
import BlogCard from "../blog/BlogCard";
import NotFoundImg from "../../../assets/images/image-not-found.png"
import BlogBiography from "./BlogBiography";
import DetailsSection from "./DetailsSection";
import { MajorElements } from "../../../core/constants/test-text/MajorElements";
import { AddBlogComment, AddBlogRate, AddReplayBlogComment } from "../../../core/services/api/post-data";
import ChangeMoment from "../../../core/utility/moment";
import configVariants from "../../../config/page-transition";

const BlogDetailsWrapperPage = () => {
    const { id } = useParams();
    const { i18n } = useTranslation()

    // Getting Blog Data from api with use Query
    const { data: blogData, isSuccess, refetch } = useQueryWithDependencies('GET_BLOG_DETAILS', GetBlogWithId, null, id)

    // Comment call api with react Query
    const { data: commentData, isSuccess: commentSuccess, refetch: refetchComment } = useQueryWithDependencies('GET_COMMENTS_BLOG', GetBlogsComments, null, id)

    // Blog Object
    const {
        title, newsCatregoryId, currentImageAddress, newsCatregoryName, updateDate, currentView, commentsCount,
        googleDescribe, miniDescribe, currentUserLikeId, likeCount, dissLikeCount, currentUserIsLike,
        currentUserIsDissLike, currentUserFavoriteId, isCurrentUserFavorite, currentUserSetRate, currentUserRateNumber
    } = isSuccess && blogData.detailsNewsDto

    // to like params
    const feedBackParams = {
        variant: 'blog', userLikeId: currentUserLikeId, likeNumber: likeCount, disLikeNumber: dissLikeCount,
        LikeStatus: currentUserIsLike, DissLikeStatus: currentUserIsDissLike, Id: id, favoriteId: currentUserFavoriteId,
        refetch: refetch, userFavorite: isCurrentUserFavorite, actionRate: AddBlogRate, rateStatus: currentUserSetRate,
        favoriteText: 'blogFavorite', rateNumber: currentUserRateNumber
    }

    return (
        <motion.div
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <TitleSection title={title} >
                <BreadCrumb href={'/Blog'} text="BlogSection" />
                <BreadCrumb type="Div" text={title} />
            </TitleSection>
            <div className="main-container lg:flex lg:flex-row-reverse gap-7 my-28">
                <div data-aos={`fade-${i18n.language === 'fa' ? 'right' : 'left'}`} data-aos-duration="700"
                    className="lg:w-[915px] sm:w-full mobile:w-full mx-auto">
                    <ImageFallBack
                        src={currentImageAddress} alt={'blog-picture'} fallback={NotFoundImg}
                        className="h-[420px] w-full rounded-xl"
                    />
                    <DetailsSection
                        category={newsCatregoryName}
                        date={updateDate && ChangeMoment(updateDate, "YYYY/MM/DD", "persian")}
                        view={currentView}
                        studyTime={5}
                        commentsNumber={commentsCount}
                    />
                    <BlogBiography
                        title={title}
                        bio={googleDescribe}
                    />
                    <OverView_Details
                        training={miniDescribe}
                        MajorElements={MajorElements}
                        Class={"hidden"}
                        variant={'blog_event'}
                        titleLearning={'LearnBlog'}
                        ElementClass={'hidden'}
                    />
                    <FeedbackSection params={feedBackParams} />
                    <CommentSection
                        Id={id}
                        apiFunction={AddBlogComment}
                        variant={'blogDetails'}
                        replayComment={AddReplayBlogComment}
                        getReplay={GetReplayBlogComment}
                        data={commentData}
                        commentSuccess={commentSuccess}
                        refetch={refetchComment}
                    />
                </div>
                <RelatedItems
                    category={newsCatregoryId}
                    params={{ newsCatregoryId: newsCatregoryId }}
                    apiFunction={GetNewsFilterPage}
                    variant={'news'}
                    RenderItem={BlogCard}
                />
            </div>

        </motion.div>
    )
}

export default BlogDetailsWrapperPage