import Details_Tabs from "./Details_Tabs"
import Tab from "./Tab";
import { CommentSection, FeedbackSection, OptionParts, OverView_Details } from "../../common";
import { AddCourseComment, AddReplyCourseComment } from "../../../core/services/api/post-data";
import { weeks } from "../../../core/constants/tabs/tabData";
import { courseCommentValid } from "../../../core/validations/Auth.Validations";

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
                            describe={params.describe}
                            variant={params.variant} />
                        <FeedbackSection params={params} />
                    </>
                </Tab>
                <Tab label="Study program">
                    <div data-aos="fade-left" className="max-sm:text-center Box-shadow1 p-5 bg-MainBg rounded-lg border border-LightLavender">
                        {weeks.map((item) => (
                            <div className="mb-8">
                                <h1 className="boldStyle_text text-2xl mb-5">{item.title}</h1>
                                {item.options.map((item, index) => (
                                    <OptionParts
                                        key={index}
                                        text={item}
                                        holderStyle="justify-center lg:justify-start my-3"
                                        disableIconIn="1024px"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </Tab>
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