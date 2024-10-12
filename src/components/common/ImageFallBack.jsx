import { useEffect, useState } from "react"

const ImageFallBack = ({ src, alt, fallback, ...props }) => {

    console.log(src)
    const [srcImage, setSrcImage] = useState(src)

    useEffect(() => {
        if (srcImage) return
        setSrcImage(fallback)
    }, [])

    const handleError = () => setSrcImage(fallback)

    return (
        <img
            src={srcImage}
            alt={alt}
            onError={handleError}
            {...props}
        />
    )
}

export default ImageFallBack
