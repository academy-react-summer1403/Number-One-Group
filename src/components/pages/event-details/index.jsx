import { useParams } from "react-router-dom"
import { DateIcon, TotalIcon } from "../../../core/icon";
import { MdChairAlt } from "react-icons/md";
import { useQueryWithDependencies } from "../../../core/hooks/react-query"
import { DetailsBox, OverView_Details, Title_details, ImageFallBack, CustomMap } from "../../common";
import { TitleSection, BreadCrumb } from "../../partials/title-section";
import { GetEventDetails } from "../../../core/services/api/get-data";
import fallback from "../../../assets/images/events.png"
import configVariants from "../../../config/page-transition";
import { motion } from "framer-motion";

const EventDetailsWrapper = () => {
    const { id } = useParams();

    // Find the details of the selected event
    const { data: SelectedEvents } = useQueryWithDependencies("GET_EVENT_DETAILS", GetEventDetails, id, id)

    const DetailsEvent = [
        { titleDetail: "eventDate", countDetail: SelectedEvents?.startEventTime, iconDetail: <DateIcon width={18} height={18} /> },
        { titleDetail: "graduation", countDetail: SelectedEvents?.students, iconDetail: <TotalIcon /> },
        { titleDetail: "chairs", countDetail: SelectedEvents?.chairs, iconDetail: <MdChairAlt color="#7F7E97" size={20} /> }
    ]

    return (
        <motion.div
            variants={configVariants}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
        >
            <TitleSection title={SelectedEvents?.title} >
                <BreadCrumb href={'/Events'} text={'Events'} />
                <BreadCrumb type="Div" text={SelectedEvents?.title} />
            </TitleSection>
            <div className="xl:w-9/12 w-[88%]  mx-auto my-20 relative  cursor-default">
                <ImageFallBack
                    src={SelectedEvents?.currentImageAddressTumb}
                    className="w-full md:h-[450px] rounded-xl"
                    fallback={fallback}
                />
                <div className="flex max-lg:flex-wrap gap-7 justify-between">
                    <div className="max-lg:w-full">
                        <Title_details
                            title={SelectedEvents?.title}
                            creator={SelectedEvents?.addUserFullName}
                            NumberStudents={SelectedEvents?.students}
                            differentDetail={SelectedEvents?.address}
                            variant={"event-detail"}
                        />
                        <OverView_Details
                            miniDescribe={SelectedEvents?.miniDescribe}
                            title={'EventOverview'}
                            describe={SelectedEvents?.describe}
                        />
                    </div>
                    <div className="flex flex-wrap gap-y-7 min-w-72 w-full lg:w-72 lg:-mt-14 lg:ml-7">
                        <DetailsBox
                            variant="event-detail"
                            price={SelectedEvents?.price}
                            Detail={DetailsEvent}
                            arrowColor={"#fff"}
                            colorButton={"purple"}
                            btnText={"Join"}
                            detailInfo={"EventInfo"}
                            priceInfo={"EventPrice"}
                        />
                        <div className={`w-full h-[288px] Box-shadow1 p-5 bg-white rounded-lg`}>
                            <CustomMap width={"100%"} height={"100%"} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default EventDetailsWrapper