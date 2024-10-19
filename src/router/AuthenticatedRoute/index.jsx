import { Dashboard, EditInformation, Favorites, Information, MyCourses, MyViews, Reserved, Security } from "../../screens"
import routerPublic from "../UnAuthenticatedRoute"
import { UserPanelLayout } from "../../components/layouts"

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
        ]
    }
]

export default routerPrivate
