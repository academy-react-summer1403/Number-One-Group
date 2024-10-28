import { Spinner } from "@nextui-org/react"
import { useEffect } from "react"
import { useState } from "react"

const OfflineWarning = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    const handleOnline = () => { setIsOnline(true) }

    const handleOffline = () => { setIsOnline(false) }

    useEffect(() => {
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    }, [])

    return (
        !isOnline &&
        <div className="h-screen w-screen bg-zinc-900/50  z-50 fixed  top-0 left-0">
            <Spinner label="لطفا اینترنت خود را بررسی کنید..." size="lg" className="fixed z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" color="secondary" />
        </div>
    )
}

export default OfflineWarning
