import { Navigate } from "react-router-dom"
import { MainLayouts, AuthorizeLayout } from "../../components/layouts"
import { Landing, ForgetPasswordLogin, Login, Register, TowStepLogin, Courses, Blog, CourseDetails, BlogDetails, Error404 } from "../../screens"
import { PageTransition } from "../../components/common"

const routerPublic = [
    {
        element: <MainLayouts />,
        children: [
            {
                path: '/',
                element: <PageTransition name="صفحه اصلی">
                    <Landing />
                </PageTransition>

            },
            { path: '/home', element: <Navigate to="/" /> },
            {
                path: '/Courses',
                element: <PageTransition name="دوره های آموزشی">
                    <Courses />
                </PageTransition>
            },
            {
                path: '/CourseDetails',
                element: <PageTransition name="دوره های آموزشی">
                    <CourseDetails />
                </PageTransition>,
                children: [{ path: '/CourseDetails/:id', element: <CourseDetails /> }]
            },
            {
                path: '/Blog',
                element: <PageTransition name="وبلاگ ها">
                    <Blog />
                </PageTransition>
            },
            {
                path: '/BlogDetails',
                element: <PageTransition name="وبلاگ ها">
                    <BlogDetails />
                </PageTransition>,
                children: [{ path: '/BlogDetails/:id', element: <BlogDetails /> }]
            },
            { path: '/*', element: <Error404 /> },
        ],
    },
    {
        path: '/authorize',
        element: <AuthorizeLayout />,
        children: [
            {
                path: "/authorize/login",
                children: [
                    {
                        index: true,
                        element: <PageTransition name="ورود">
                            <Login />
                        </PageTransition>
                    },
                    { path: "twoStep", element: <TowStepLogin /> },
                ]
            },
            {
                path: "/authorize/register",
                element: <PageTransition name="ثبت نام">
                    <Register />
                </PageTransition>
            },
            {
                path: "/authorize/forgetPassword",
                element: <PageTransition name="فراموشی پسورد">
                    <ForgetPasswordLogin />
                </PageTransition>,
                children: [
                    { path: "/authorize/forgetPassword/:config", element: <ForgetPasswordLogin /> },
                ]
            },
        ]
    },
]

export default routerPublic