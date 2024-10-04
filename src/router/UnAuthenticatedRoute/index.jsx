import { Navigate } from "react-router-dom"
import { MainLayouts } from "../../components/layouts"
import { Landing } from "../../screens"

const routerPublic = [
    {
        element: <MainLayouts />,
        children: [
            { path: '/', element: <Landing /> },
            { path: '/home', element: <Navigate to={"/"} /> }
        ]
    }
]

export default routerPublic