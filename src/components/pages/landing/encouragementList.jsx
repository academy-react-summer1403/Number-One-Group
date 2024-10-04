const Encouragement = ({ title, description, icon }) => {
    return (
        <li className="sm:w-1/2 xl:w-1/4 h-fit py-4 px-8 flex justify-center flex-wrap gap-y-4">
            <div className="w-20 h-20">
                <img className="w-full h-full" src={icon} alt="icon" />
            </div>
            <h1 className="w-full text-center text-white mobile:text-lg sm:text-xl">{title}</h1>
            <p className="mediumStyle_text w-full text-center mobile:text-sm">{description}</p>
        </li>
    )
}

export default Encouragement