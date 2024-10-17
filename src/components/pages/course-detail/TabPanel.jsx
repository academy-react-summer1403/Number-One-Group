import Details_Tabs from "./Details_Tabs"
import Tab from "./Tab";
import { CommentSection, FeedbackSection, OverView_Details } from "../../common";
import { AddCourseComment} from "../../../core/services/api/post-data";

const TabPanel = ({
    overView,
    training,
    MajorElements,
    variant,
    params,
}) => {

    return (
        <div>
            <Details_Tabs>
                <Tab label="Overview">
                    <>
                        <OverView_Details
                            overView={overView}
                            training={training}
                            MajorElements={MajorElements}
                            Class={'block'}
                            ElementClass={'hidden'}
                            titleOverView={'CourseOverView'}
                            titleLearning={'LearnCourse'}
                            variant={variant} />
                        <FeedbackSection params={params} />
                    </>
                </Tab>
                <Tab label="Study program">Study program </Tab>
                <Tab label="User comments">
                    <CommentSection
                        Id={params.Id}
                        apiFunction={AddCourseComment}
                        data={params.commentData}
                        refetch={params.refetchComment}
                    />
                    </Tab>
            </Details_Tabs>
        </div>
    )
}

export default TabPanel