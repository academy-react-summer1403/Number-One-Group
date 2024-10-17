import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/partials/title-section/BreadCrumb"
import TitleSection from "../../components/partials/title-section/TitleSection"
import { useQueryWithDependencies } from "../../core/hooks/react-query";
import { GetBlogWithId } from "../../core/services/api/get-data";

const BlogDetails = () => {
    const { id } = useParams();

    // Getting Blog Data from api with use Query
    const { data: blogData, isSuccess } = useQueryWithDependencies('GET_BLOG_DETAILS', GetBlogWithId, null, id)

    // Blog Object
    const {
        title,
    } = isSuccess && blogData.detailsNewsDto

    return (
        <>
            <TitleSection title={title} >
                <BreadCrumb href={'/Blog'} text="BlogSection" />
                <BreadCrumb type="Div" text={title} />
            </TitleSection>
        </>
    )
}

export default BlogDetails