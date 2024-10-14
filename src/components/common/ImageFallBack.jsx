const ImageFallBack = ({ src, alt, fallback, ...props }) => {

    if (src == null) { src = fallback }

    return (
        <img
            src={src}
            alt={alt}
            onError={() => { return src = fallback }}
            {...props}
        />
    )
}

export default ImageFallBack
