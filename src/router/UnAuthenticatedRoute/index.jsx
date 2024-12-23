import { Navigate } from "react-router-dom"
import { MainLayouts, AuthorizeLayout } from "../../components/layouts"
import { LandingPage, ForgetPasswordLogin, Login, Register, TowStepLogin, Courses, Blog, CourseDetails, BlogDetails, Error404, TeacherPage, TeacherDetails, Event, EventDetails, ContactUs, Comparison, Product, ProductDetails, Cart, Shops, ShopDetails, About } from "../../screens"

const routerPublic = [
    {
        element: <MainLayouts />,
        children: [
            { path: '/', element: <LandingPage /> },
            { path: '/home', element: <Navigate to="/" /> },
            { path: '/teachers', element: <TeacherPage /> },
            { path: '/Courses', element: <Courses /> },
            {
                path: "/teacherDetails",
                element: <TeacherDetails />,
                children: [{ path: '/teacherDetails/:id', element: <TeacherDetails /> }]
            },
            {
                path: '/CourseDetails',
                element: <CourseDetails />,
                children: [{ path: '/CourseDetails/:id', element: <CourseDetails /> }]
            },
            { path: '/Blog', element: <Blog /> },
            {
                path: '/BlogDetails',
                element: <BlogDetails />,
                children: [{ path: '/BlogDetails/:id', element: <BlogDetails /> }]
            },
            { path: '/events', element: <Event /> },
            {
                path: '/eventDetails',
                element: <EventDetails />,
                children: [{ path: '/eventDetails/:id', element: <EventDetails /> }]
            },
            { path: '/contact', element: <ContactUs /> },
            { path: '/products', element: <Product /> },
            { path: '/shops', element: <Shops /> },
            {
                path: '/shopDetails',
                element: <ShopDetails />,
                children: [{ path: '/shopDetails/:id', element: <ShopDetails /> }]
            },
            {
                path: '/productDetails',
                element: <ProductDetails />,
                children: [{ path: '/productDetails/:id', element: <ProductDetails /> }]
            },
            { path: '/cart', element: <Cart /> },
            { path: '/*', element: <Error404 /> },
            {
                path: '/Comparison',
                element: <Comparison />,
                // children: [{ path: '/Comparison/:id', element: <Comparison /> }]
            },
            { path: '/about', element: <About /> }
        ],
    },
    {
        path: '/authorize',
        element: <AuthorizeLayout />,
        children: [
            {
                path: "/authorize/login",
                children: [
                    { index: true, element: <Login />, },
                    { path: "twoStep", element: <TowStepLogin /> },
                ]
            },
            { path: "/authorize/register", element: <Register />, },
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