const KeyDetails = ({ label, value, dir }) => {
    return (
        <li className="w-full flex gap-x-2 justify-center xl:justify-start text-DarkBlue">
            <span>{label}:</span>
            {typeof value === "object" ? (
                value.map((value, index) => <span className="mediumStyle_text" dir={dir} key={index}>{value},</span>)
            ) : (
                <span className="mediumStyle_text" dir={dir}>{value}</span>
            )}
        </li>
    )
}

export default KeyDetails
