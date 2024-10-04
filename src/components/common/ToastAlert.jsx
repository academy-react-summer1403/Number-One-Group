import { useSelector } from "react-redux"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const ToastAlert = () => {
    const theme = useSelector(state => state.DarkMode)

    return (
        <ToastContainer
            position="top-right"
            // autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={theme ? "dark" : "light"}
            bodyClassName={"font-IranSans"}
        ></ToastContainer>
    )
}

export default ToastAlert
