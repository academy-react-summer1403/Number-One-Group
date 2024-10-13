const ImageFallBack = ({ src, alt, fallback, ...props }) => {

    if (src == null) { src = fallback }

    const handleError = () => src = fallback

    return (
        <img
            src={src}
            alt={alt}
            onError={handleError}
            {...props}
        />
    )
}

export default ImageFallBack
