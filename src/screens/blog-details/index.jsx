import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/partials/title-section/BreadCrumb"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { useQueryWithDependencies } from "../../core/hooks/react-query";
import { GetBlogWithId, GetNewsFilterPage } from "../../core/services/api/get-data";
import { ImageFallBack, OverView_Details, RelatedItems } from "../../components/common";
import { BlogCard } from "../../components/pages/blog";
import NotFoundImg from "../../assets/images/image-not-found.png"
import { BlogBiography, DetailsSection } from "../../components/pages/blog-details";
import { MajorElements } from "../../core/constants/test-text/MajorElements";


const BlogDetails = () => {
    const { id } = useParams();

    // Getting Blog Data from api with use Query
    const { data: blogData, isSuccess } = useQueryWithDependencies('GET_BLOG_DETAILS', GetBlogWithId, null, id)

    // Blog Object
    const {
        title, newsCatregoryId, currentImageAddress, newsCatregoryName, updateDate, currentView, commentsCount,
        googleDescribe, miniDescribe
    } = isSuccess && blogData.detailsNewsDto

    return (
        <>
            <TitleSection title={title} >
                <BreadCrumb href={'/Blog'} text="BlogSection" />
                <BreadCrumb type="Div" text={title} />
            </TitleSection>
            <div className="main-container lg:flex lg:flex-row-reverse gap-7 my-28">
                <div className="lg:w-[915px] sm:w-full mobile:w-full mx-auto">
                    <ImageFallBack
                        src={currentImageAddress} alt={'blog-picture'} fallback={NotFoundImg}
                        className="h-[420px] w-full rounded-xl"
                    />
                    <DetailsSection
                        category={newsCatregoryName}
                        date={updateDate && updateDate.slice(0, 10)}
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
                </div>
                <RelatedItems
                    category={newsCatregoryId}
                    params={{ newsCatregoryId: newsCatregoryId }}
                    apiFunction={GetNewsFilterPage}
                    variant={'news'}
                    RenderItem={BlogCard}
                />
            </div>

        </>
    )
}

export default BlogDetails