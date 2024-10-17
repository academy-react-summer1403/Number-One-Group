import { Navigate } from "react-router-dom"
import { MainLayouts, AuthorizeLayout } from "../../components/layouts"
import { Landing, ForgetPasswordLogin, Login, Register, TowStepLogin, Courses, Blog, CourseDetails, BlogDetails } from "../../screens"

const routerPublic = [
    {
        element: <MainLayouts />,
        children: [
            { path: '/', element: <Landing /> },
            { path: '/home', element: <Navigate to={"/"} /> },
            { path: '/Courses', element: <Courses /> },
            { path: '/Blog', element: <Blog /> },
            {
                path: '/CourseDetails',
                element: <CourseDetails />,
                children: [{ path: '/CourseDetails/:id', element: <CourseDetails /> }]
            },
            {
                path: '/BlogDetails',
                element: <BlogDetails />,
                children: [{ path: '/BlogDetails/:id', element: <BlogDetail /> }]
            },
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
                    { path: "/authorize/login/twoStep", element: <TowStepLogin /> },
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