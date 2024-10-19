import Details_Tabs from "./Details_Tabs"
import Tab from "./Tab";
import { CommentSection, FeedbackSection, OverView_Details } from "../../common";
import { AddCourseComment, AddReplyCourseComment} from "../../../core/services/api/post-data";

const TabPanel = ({
    overView,
    training,
    MajorElements,
    variant,
    getReplay,
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
                            variant={params.variant} />
                        <FeedbackSection params={params}/>
                    </>
                </Tab>
                <Tab label="Study program">Study program </Tab>
                <Tab label="User comments">
                    <CommentSection
                        Id={params.Id}
                        apiFunction={AddCourseComment}
                        variant={variant} 
                        replayComment={AddReplyCourseComment} 
                        getReplay={getReplay}
                        data={params.commentData}
                        commentSuccess={params.commentSuccess}
                        refetch={params.refetchComment}
                    />
                    </Tab>
            </Details_Tabs>
        </div>
    )
}

export default TabPanel