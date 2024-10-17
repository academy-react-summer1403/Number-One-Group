import Details_Tabs from "./Details_Tabs"
import Tab from "./Tab";
import { OverView_Details } from "../../common";

const TabPanel = ({
    overView,
    training,
    MajorElements,
    variant,
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
                    </>
                </Tab>
                <Tab label="Study program">Study program </Tab>
                <Tab label="User comments">comments</Tab>
            </Details_Tabs>
        </div>
    )
}

export default TabPanel