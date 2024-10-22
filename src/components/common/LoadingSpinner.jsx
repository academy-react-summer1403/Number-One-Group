import { useLayoutEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const LoadingSpinner = () => {
    const [loading, setLoading] = useState(true)

    useLayoutEffect(() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 3000)
    }, [])

    const backgroundStyle = {
        display: loading === true ? 'flex' : 'none'
    }

    return (
        <div
            style={backgroundStyle}
            className="w-svw h-svh bg-black/50 fixed top-0 left-0 z-50 items-center flex-wrap justify-center"
        >
            <SyncLoader
                color="#5751E1"
                loading
                size={20}
                className="mx-auto"
            />
        </div>

    )
}

export default LoadingSpinner
