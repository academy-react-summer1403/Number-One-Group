import { Navigate } from "react-router-dom"
import { MainLayouts, AuthorizeLayout } from "../../components/layouts"
import { Landing, ForgetPasswordLogin, Login, Register, TowStepLogin, Courses, Blog } from "../../screens"

const routerPublic = [
    {
        element: <MainLayouts />,
        children: [
            { path: '/', element: <Landing /> },
            { path: '/home', element: <Navigate to={"/"} /> },
            { path: '/Courses', element: <Courses /> },
            { path: '/Blog', element: <Blog /> },
        ]
    },
    {
        path: '/authorize',
        element: <AuthorizeLayout />,
        children: [
            {
                path: "/authorize/login",
                children: [
                    { index: true, element: <Login /> },
                    { path: "twoStep", element: <TowStepLogin /> },
                ]
            },
            { path: "/authorize/register", element: <Register /> },
            {
                path: "/authorize/forgetPassword",
                element: <ForgetPasswordLogin />,
                children: [
                    { path: "/authorize/forgetPassword/:config", element: <ForgetPasswordLogin /> },
                ]
            },
        ]
    },
]

export default routerPublic