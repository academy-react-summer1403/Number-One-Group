import { Dashboard, EditInformation, Favorites, Information, CreateJob, Jobs, MyCourses, MyViews, Payment, Reserved, Security, UpdateJob, Groups } from "../../screens"
import routerPublic from "../UnAuthenticatedRoute"
import { UserPanelLayout } from "../../components/layouts"
import { PaymentStepOne, PaymentStepThree, PaymentStepTwo } from "../../components/pages/user-panel"

const routerPrivate = [
    ...routerPublic,
    {
        element: <UserPanelLayout />,
        children: [
            { path: "/userPanel", element: <Dashboard /> },
            { path: "/userPanel/information", element: <Information /> },
            { path: "/userPanel/editInformation", element: <EditInformation /> },
            { path: "/userPanel/myCourses", element: <MyCourses /> },
            { path: "/userPanel/reserved", element: <Reserved /> },
            { path: "/userPanel/myViews", element: <MyViews /> },
            { path: "/userPanel/favorites", element: <Favorites /> },
            { path: "/userPanel/security", element: <Security /> },
            {
                path: "/userPanel/payment",
                element: <Payment />,
                children: [
                    { path: "/userPanel/payment/:id", element: <PaymentStepOne /> },
                    { path: "/userPanel/payment/invoice/:id/:payment", element: <PaymentStepTwo /> },
                    { path: "/userPanel/payment/step2/:paymentId", element: <PaymentStepThree /> },
                ]
            },
            { path: "/userPanel/jobs", element: <Jobs /> },
            { path: "/userPanel/createJob", element: <CreateJob /> },
            { path: "/userPanel/updateJob/:id", element: <UpdateJob /> },
            { path: "/userPanel/groups", element: <Groups /> },
        ]
    }
]

export default routerPrivate
