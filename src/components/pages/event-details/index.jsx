import { useParams } from "react-router-dom"
import { DateIcon, TopicsIcon, TotalIcon } from "../../../core/icon";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { useQueryWithDependencies } from "../../../core/hooks/react-query"
import { DetailsBox, OverView_Details, Title_details, ImageFallBack, CustomMap } from "../../common";
import { TitleSection, BreadCrumb } from "../../partials/title-section";
import { GetEventDetails } from "../../../core/services/api/get-data";
import fallback from "../../../assets/images/image-not-found.png"

const EventDetailsWrapper = () => {
    const { i18n } = useTranslation();
    const { id } = useParams();
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })

    // Find the details of the selected event
    const { data: SelectedEvents } = useQueryWithDependencies("GET_EVENT_DETAILS", GetEventDetails, id, id)

    const DetailsEvent = [
        { titleDetail: "eventDate", countDetail: SelectedEvents?.startEventTime, iconDetail: <DateIcon /> },
        { titleDetail: "EventTotalSeat", countDetail: SelectedEvents?.students, iconDetail: <TotalIcon /> }
    ]

    return (
        <>
            <TitleSection title={SelectedEvents?.title} >
                <BreadCrumb href={'/Events'} text={'Events'} />
                <BreadCrumb type="Div" text={SelectedEvents?.title} />
            </TitleSection>
            <div className="xl:w-9/12 w-[88%]  mx-auto my-20 relative  cursor-default">
                <ImageFallBack
                    src={SelectedEvents?.currentImageAddressTumb}
                    className="w-full md:h-[450px]"
                    fallback={fallback}
                />
                <div className="flex max-lg:flex-wrap gap-7">
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
        </>
    )
}

export default EventDetailsWrapper