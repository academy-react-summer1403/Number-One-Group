const variants = {
    "bgGray": "bg-LavenderMist text-VioletBlue text-sm sm:text-base",
    "bgTextGray": "bg-LightLavender mediumStyle_text ",
    "bgBlue": "bg-VioletBlue text-white",
}

const Label = ({ text, variant, style }) => {
    return (
        <span className={`py-1 px-4 rounded-full  ${variants?.[variant]} ${style}`}>
            {text}
        </span>
    )
}

export default Label
